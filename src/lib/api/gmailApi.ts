import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

// Function to create a Gmail API client with the provided auth
export const createGmailClient = (authClient: OAuth2Client) => {
  return google.gmail({ version: 'v1', auth: authClient });
};

// Function to create an email message
export const createMessage = (
  to: string, 
  from: string, 
  subject: string, 
  messageText: string,
  name?: string
) => {
  // Encode the email message in base64
  const message = [
    `From: ${name ? `"${name}" <${from}>` : from}`,
    `To: ${to}`,
    'Content-Type: text/html; charset=utf-8',
    'MIME-Version: 1.0',
    `Subject: ${subject}`,
    '',
    messageText
  ].join('\n');

  // Encode message to base64url format as required by Gmail API
  const encodedMessage = Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

  return { raw: encodedMessage };
};

// Function to send an email using Gmail API
export const sendEmail = async (
  authClient: OAuth2Client,
  to: string,
  from: string,
  subject: string,
  messageText: string,
  name?: string
) => {
  try {
    const gmail = createGmailClient(authClient);
    
    // Create the message
    const message = createMessage(to, from, subject, messageText, name);
    
    // Send the message
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: message,
    });
    
    return { success: true, messageId: response.data.id };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Function to format a contact form submission into an HTML email
export const formatContactEmail = (
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