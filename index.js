const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

//Metodo responsavel por configura o transporte de envio de email
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  const remetente = process.env.USER_EMAIL;

  const snapshot = await admin.firestore().collection("usuarios").get();

  const emails = snapshot.docs.map((usuario) => usuario.data().email);

  if (emails.length === 0)
    return res.status(400).send("Não a emails de usuarios");

  const assunto = req.body["assunto"];
  const corpo = req.body["corpor"];

  console.log(emails);

  const email = {
    from: remetente,
    to: emails.join(", "),
    subject: assunto,
    text: corpo,
  };

  transporter
    .sendMail(email)
    .then((message) => {
      console.log("Mensagem enviada:", message.messageId);
      res.status(200).send("Email enviado ");
    })
    .catch((error) => {
      res.status(500).send("Erro ao enviar o email");
    });
});
