import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contactSchema";
import * as postmark from "postmark";

// Initialize Postmark client lazily to avoid build issues
const getPostmarkClient = () => {
  const token = process.env.POSTMARK_API_TOKEN;
  if (!token) {
    throw new Error("Postmark API token not configured");
  }
  return new postmark.ServerClient(token);
};

// Format contact form data into HTML email
const formatContactEmail = (
  fullName: string,
  email: string,
  subject: string,
  message: string
) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Subject:</strong> ${subject}</p>
      <h3 style="color: #555;">Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, "<br/>")}
      </div>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This message was sent from your website's contact form.
      </p>
    </div>
  `;
};

// Format auto-reply email
const formatAutoReplyEmail = (fullName: string, senderEmail: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank You for Your Message</h2>
      <p>Dear ${fullName},</p>
      <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,<br/>${senderEmail}</p>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message } = result.data;
    const senderEmail = process.env.POSTMARK_FROM_EMAIL;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || senderEmail;

    if (!senderEmail) {
      return NextResponse.json(
        { error: "Contact form not properly configured" },
        { status: 503 }
      );
    }

    // Initialize client only when needed
    const client = getPostmarkClient();

    // Send notification email to receiver
    await client.sendEmail({
      From: senderEmail,
      To: receiverEmail,
      Subject: `New Contact Form Submission: ${subject}`,
      HtmlBody: formatContactEmail(fullName, email, subject, message),
      ReplyTo: email,
      MessageStream: "outbound",
    });

    // Send auto-reply to the sender
    await client.sendEmail({
      From: senderEmail,
      To: email,
      Subject: "Thank you for your message",
      HtmlBody: formatAutoReplyEmail(fullName, senderEmail),
      MessageStream: "outbound",
    });

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
