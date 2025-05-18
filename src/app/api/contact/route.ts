import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Format contact form data into HTML email
const formatContactEmail = (
  fullName: string,
  email: string,
  message: string
) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <h3 style="color: #555;">Message:</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
      <p style="font-size: 12px; color: #999; margin-top: 20px;">
        This message was sent from your website's contact form.
      </p>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { fullName, email, message } = body;
    
    // Validate form data
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }
    
    // Email configuration
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'your-email@example.com';
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER || '';
    const smtpPass = process.env.SMTP_PASS || '';
    
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });
    
    // Create email content
    const htmlContent = formatContactEmail(fullName, email, message);
    
    // Send email
    await transporter.sendMail({
      from: `"Website Contact Form" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: htmlContent,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 