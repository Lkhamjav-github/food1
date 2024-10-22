import nodemailer from 'nodemailer';

// Орчны хувьсагчдыг импортлох
const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

// Орчны хувьсагчид зөв ачаалагдсан эсэхийг шалгах
console.log('Email:', email);
console.log('Password:', pass);

// Nodemailer-ийн транспортыг тохируулах
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Gmail SMTP серверийн хост
  port: 465, // SSL-д зориулсан порт (465 бол secure port)
  secure: true, // true бол SSL ашиглана гэсэн үг
  auth: {
    user: email, // Таны имэйл
    pass: pass,  // Таны имэйл нууц үг эсвэл App password
  },
});

// И-мэйл илгээх тохиргоо
export const mailOptions = {
  from: email, // Имэйл хаяг илгээгч талд гарна
  to: email, // Хүлээн авагч талд таны имэйл хаяг
  subject: 'Тест и-мэйл', // Сэдэв
  text: 'Энэ бол тест и-мэйл юм!', // Энгийн текст агуулга
};

// И-мэйл илгээх функц
export const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('И-мэйл амжилттай илгээгдлээ: %s', info.messageId);
  } catch (error) {
    console.error('И-мэйл илгээх явцад алдаа гарлаа:', error);
  }
};
