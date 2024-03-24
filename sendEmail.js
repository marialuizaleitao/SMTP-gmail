const nodemailer = require("nodemailer")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER,
        password: process.env.APP_PASSWORD,
    }
});

const mailOptions = {
    from: {
        name: 'Seu Nome',
        address: process.env.USER
    },
    to: ['seu-gmail@gmail.com'],
    subject: "Assunto do Email",
    text: "Corpo do texto",
    html: "<b><\b>"
}

const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent.');
    } catch(error) {
        console.log(error);
    }
}

sendMail(transporter, mailOptions);