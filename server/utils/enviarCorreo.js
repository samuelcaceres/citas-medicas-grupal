// enviarCorreo.js

const nodemailer = require('nodemailer');

async function enviarCorreo(correoDestino) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tucontraseña'
      }
    });

    const mailOptions = {
      from: 'tucorreo@gmail.com',
      to: correoDestino,
      subject: 'Asunto del correo',
      text: 'Este es un ejemplo de correo electrónico enviado desde Node.js'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
  } catch (error) {
    console.error('Error al enviar correo electrónico:', error);
  }
}

module.exports = enviarCorreo;
