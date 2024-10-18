import type { NextApiRequest, NextApiResponse } from "next";
import { sendContactForm } from "../api/lib/api";
import { transporter, mailOptions } from "./config/nodemailer";
type Data = {
  name?: string;
  message?: string;
  success?: boolean;
};
console.log(sendContactForm)
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    const data = req.body;
    const { firstName, lastName, email, phone, message, subject } = data;
    if (!sendContactForm) {
      return res.status(400).json({ message: "Bad request contact form" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: subject || "New Contact Form Submission",
        text: `FirstName: ${firstName}\nLastName: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // Имэйл текст
        html: `<h1>Contact Form Submission</h1>
        <p><strong>FirstName:</strong> ${firstName}</p>
        <p><strong>LastName:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>`,
      })
      return res.status(200).json({ success: true })

    }
    catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return res.status(400).json({ message: error.message });
      } else {
        return res.status(400).json({ message: "Unknown error occurred" });
      }
    }
  }
  return res.status(400).json({ message: "Bad run request" })
}
export default handler;