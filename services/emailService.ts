import { RegistrationData } from '../types';

const API_URL = process.env.VITE_API_URL || 'http://localhost:3001';

export const sendRegistrationEmail = async (data: RegistrationData): Promise<void> => {
  console.log("Attempting to send registration email...");
  console.log("Registration Details:", data);

  try {
    const response = await fetch(`${API_URL}/api/email/send-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to send registration email');
    }

    console.log('Registration email sent successfully');
  } catch (error) {
    console.error("Failed to send registration email:", error);
    throw new Error("An error occurred while sending the registration email. Please try again later.");
  }
};
