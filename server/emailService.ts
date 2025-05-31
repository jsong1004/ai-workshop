import { RegistrationData } from '../types.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sgMail from '@sendgrid/mail';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local in the root directory
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.GMAIL_USER; // Use the same admin email as before

if (!SENDGRID_API_KEY || !ADMIN_EMAIL) {
  console.error('Missing required environment variables: SENDGRID_API_KEY or GMAIL_USER');
  process.exit(1);
}

sgMail.setApiKey(SENDGRID_API_KEY);

const createAdminEmailBody = (data: RegistrationData) => `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 20px auto; }
        h2 { color: #0077cc; }
        strong { color: #005fa3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New AI Workshop Registration</h2>
        <p>A new user has registered for the AI Workshop with the following details:</p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>AI Experience:</strong> ${data.experience}</li>
          <li><strong>AI Usage/Plans:</strong></li>
        </ul>
        <pre>${data.usage}</pre>
        <p>Please follow up as necessary.</p>
      </div>
    </body>
  </html>
`;

const createConfirmationEmailBody = (data: RegistrationData) => `
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; margin: 20px auto; }
        h2 { color: #0077cc; }
        .details { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Welcome to the AI Workshop!</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for registering for our AI Workshop. We're excited to have you join us!</p>
        
        <div class="details">
          <h3>Your Registration Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${data.name}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>AI Experience Level:</strong> ${data.experience}</li>
          </ul>
        </div>

        <h3>Workshop Information:</h3>
        <ul>
          <li><strong>Date:</strong> June 7th (Saturday)</li>
          <li><strong>Time:</strong> 1:00 PM</li>
          <li><strong>Location:</strong> Washington Education Institute</li>
          <li><strong>Address:</strong> 15405 SE 37th St, Bellevue, WA 98006</li>
        </ul>

        <p>Please remember to bring your laptop for the hands-on sessions.</p>

        <div class="footer">
          <p>If you have any questions, please don't hesitate to contact us.</p>
          <p>Best regards,<br>The AI Workshop Team</p>
        </div>
      </div>
    </body>
  </html>
`;

export const sendRegistrationEmail = async (data: RegistrationData): Promise<void> => {
  console.log("Attempting to send registration emails via SendGrid...");
  console.log("Registration Details:", data);

  try {
    // Send email to admin
    console.log('Sending admin notification email...');
    await sgMail.send({
      to: ADMIN_EMAIL,
      from: ADMIN_EMAIL,
      subject: `New AI Workshop Registration: ${data.name}`,
      html: createAdminEmailBody(data),
    });
    console.log(`Admin notification email sent successfully`);

    // Send confirmation email to registrant
    console.log('Sending confirmation email to registrant...');
    await sgMail.send({
      to: data.email,
      from: ADMIN_EMAIL,
      subject: 'AI Workshop Registration Confirmation',
      html: createConfirmationEmailBody(data),
      replyTo: ADMIN_EMAIL,
    });
    console.log(`Confirmation email sent successfully to ${data.email}`);
  } catch (error) {
    console.error("Failed to send registration emails via SendGrid:", error);
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }
    throw new Error("An error occurred while sending the registration emails. Please try again later.");
  }
}; 