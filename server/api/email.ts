import express from 'express';
import { sendRegistrationEmail } from '../emailService.js';
import { RegistrationData } from '../../types.js';

const router = express.Router();

router.post('/send-registration', async (req, res) => {
  try {
    const registrationData: RegistrationData = req.body;
    await sendRegistrationEmail(registrationData);
    res.status(200).json({ message: 'Registration email sent successfully' });
  } catch (error) {
    console.error('Error sending registration email:', error);
    res.status(500).json({ error: 'Failed to send registration email' });
  }
});

export default router; 