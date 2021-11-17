import crypto from 'crypto';
import axios from 'axios';
import AccountBook from '../models/accountBook.model';
import Transfer from '../models/transfer.model';
import Transactions from '../models/transactions.model';

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
  const { account, amount } = req.body;

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
    });
  }

  return res.status(200).json({
    message: 'store transfer controller',
    resources: null,
    data: transactions,
  });
};
