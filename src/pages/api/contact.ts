import type { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "./config/nodemailer"; // Adjust the path as necessary

type Data = {
  message?: string;
  success?: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // Only handle POST requests
  if (req.method === "POST") {
    const data = req.body;
    const { firstName, lastName, email, phone, message, subject } = data;

    // Check if required fields are provided
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Log the incoming data for debugging
    console.log("Received data:", data);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject || "New Contact Form Submission",
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `<h1>Contact Form Submission</h1>
               <p><strong>First Name:</strong> ${firstName}</p>
               <p><strong>Last Name:</strong> ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      return res.status(200).json({ success: true });

    } catch (error) {
      console.error("Error sending email:", error);
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  }

  // Return 405 for unsupported methods
  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
