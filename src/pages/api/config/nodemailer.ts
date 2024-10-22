import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,  
  },
});

export const mailOptions = {
  from: email, 
  to: email, 
  subject: 'Тест и-мэйл',
  text: 'Энэ бол тест и-мэйл юм!',
};

export const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('И-мэйл амжилттай илгээгдлээ: %s', info.messageId);
  } catch (error) {
    console.error('И-мэйл илгээх явцад алдаа гарлаа:', error);
  }
};
