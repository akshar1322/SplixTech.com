import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, email, consent } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your email service provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'your-email@example.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nConsent: ${consent}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      // Ensure error is treated as a string or any
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      res.status(500).json({ message: `Failed to send message: ${errorMessage}` });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
