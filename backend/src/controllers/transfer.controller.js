import crypto from 'crypto';
import axios from 'axios';
import twilio from 'twilio';
import nodemailer from 'nodemailer';
import AccountBook from '../models/accountBook.model';
import Transfer from '../models/transfer.model';
import Transactions from '../models/transactions.model';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const clientTwilio = twilio(accountSid, authToken);

const bodyEmail = (texto) => `
  <h1>Transferencia recibida<h1>
  <p>
    ${texto}
  <p>
`;

const sendEmail = async ({ from, to, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'localhost',
    port: process.env.EMAIL_PORT || 25,
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || '',
    },
  });

  return transporter.sendMail({
    from,
    to,
    subject,
    text,
    html: bodyEmail(text),
  });
};

export const create = async (req, res) => {
  const accountBook = await AccountBook.findAll({
    include: [
      {
        all: true,
      },
    ],
  });
  const { data: banks } = await axios({
    url: 'https://bast.dev/api/banks.php',
    method: 'GET',
  });
  return res.status(200).json({
    message: 'create transfer controller',
    resources: {
      accountBook,
      ...banks,
    },
    data: null,
  });
};

export const store = async (req, res) => {
  const { account, amount, bankName } = req.body;

  const transfer = await Transfer.create({
    accountBookId: account,
    amount,
  });

  let transactions;
  if (transfer) {
    const dataTransfer = await transfer.toJSON();
    const code = `${dataTransfer.created_at}`.toString();
    const hash = crypto.createHash('md5').update(code).digest('base64');
    transactions = await Transactions.create({
      operationId: transfer.id,
      operationType: 'TRA',
      codeReference: hash,
      amount,
      bankName,
    });

    const accountBook = await AccountBook.findOne({
      where: {
        id: account,
      },
    });
    const message = `Ha recibido una transferencia por un monto de ${amount}`;
    await clientTwilio.messages
      .create({
        from: phoneNumber,
        to: accountBook.phone,
        body: message,
      })
      .then((response) => {
        console.log(response);
      });
    const infoEmail = await sendEmail({
      from: 'no-reply@example.com',
      to: accountBook.email,
      subject: 'Banco - Transferencia de reibida',
      text: message,
    });
    console.log(infoEmail);
  }

  return res.status(200).json({
    message: 'store transfer controller',
    resources: null,
    data: transactions,
  });
};
