import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contactSchema";
import { Resend } from "resend";
import { getTurnstileSecretKey } from "@/lib/utils/env";
import { escapeHtml } from "@/lib/utils/escapeHtml";
import { verifyTurnstileToken } from "@/lib/contact/turnstile";

// Initialize Resend lazily so a missing runtime secret does not fail a build.
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Resend API key not configured");
  }
  return new Resend(apiKey);
};

const getRequestIp = (request: NextRequest) =>
  request.headers.get("cf-connecting-ip") ??
  request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

// Format contact form data into HTML email. All user supplied content is escaped
// before being interpolated into HTML.
const formatContactEmail = (
  fullName: string,
  email: string,
  subject: string,
  message: string
) => {
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <h3 style="color: #555;">Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${safeMessage}
      </div>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This message was sent from your website's contact form.
      </p>
    </div>
  `;
};

const formatContactText = (fullName: string, email: string, subject: string, message: string) =>
  `New Contact Form Submission\n\nName: ${fullName}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;

// Format auto-reply email
const formatAutoReplyEmail = (fullName: string, senderEmail: string) => {
  const safeName = escapeHtml(fullName);
  const safeSenderEmail = escapeHtml(senderEmail);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank You for Your Message</h2>
      <p>Dear ${safeName},</p>
      <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
      <p>Thank you,<br/>Kyle Simmons</p>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This is an automated response from ${safeSenderEmail}
      </p>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { error: "Expected a JSON request body" },
        { status: 415 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid JSON request body" }, { status: 400 });
    }

    // Parse and validate request body.
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    const { turnstileToken, ...formData } = result.data;
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Turnstile verification required" },
        { status: 400 }
      );
    }

    const turnstileSecretKey = getTurnstileSecretKey();
    if (!turnstileSecretKey) {
      console.error("Turnstile secret key not configured");
      return NextResponse.json(
        { error: "Contact form not properly configured" },
        { status: 503 }
      );
    }

    const isValidToken = await verifyTurnstileToken({
      token: turnstileToken,
      secretKey: turnstileSecretKey,
      remoteIp: getRequestIp(request),
    });
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Invalid Turnstile token" },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message } = formData;
    const senderEmail = process.env.RESEND_FROM_EMAIL;

    if (!senderEmail) {
      return NextResponse.json(
        { error: "Contact form not properly configured" },
        { status: 503 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || senderEmail;

    // Initialize client only when the request has passed server-side validation.
    const client = getResendClient();

    // The owner notification is the primary delivery. Do not report success if
    // Resend rejects it.
    const notification = await client.emails.send({
      from: senderEmail,
      to: receiverEmail,
      subject: `New Contact Form Submission: ${subject}`,
      html: formatContactEmail(fullName, email, subject, message),
      text: formatContactText(fullName, email, subject, message),
      replyTo: email,
      tags: [{ name: "source", value: "portfolio-contact" }],
    });

    if (notification.error) {
      throw new Error(`Resend notification delivery failed: ${notification.error.message}`);
    }

    // An acknowledgement is useful, but a failure here must not invite a
    // visitor to submit the form again after the owner already received it.
    const autoReply = await client.emails.send({
      from: senderEmail,
      to: email,
      subject: "Thank you for your message",
      html: formatAutoReplyEmail(fullName, senderEmail),
      text: `Thank you for contacting Kyle Simmons, ${fullName}. Your message was received.`,
      tags: [{ name: "source", value: "portfolio-contact-autoreply" }],
    });

    if (autoReply.error) {
      console.error("Resend auto-reply delivery failed", {
        message: autoReply.error.message,
        name: autoReply.error.name,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: "Failed to send message. Please try again later.",
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}
