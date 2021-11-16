import axios from 'axios';
import AccountBook from '../models/accountBook.model';
import AccountType from '../models/accountType.model';

export const index = async (req, res) => {
  const data = await AccountBook.findAll({
    include: [
      {
        all: true,
      },
    ],
  });
  return res.status(200).json({
    message: 'Index accountBook controller',
    resources: null,
    data,
  });
};

export const create = async (req, res) => {
  const { data: banks } = await axios({
    url: 'https://bast.dev/api/banks.php',
    method: 'GET',
  });
  const accountType = await AccountType.findAll();
  return res.status(200).json({
    message: 'create accountBook controller',
    resources: {
      banks,
      accountType,
    },
    data: null,
  });
};

export const store = async (req, res) => {
  const { name, rut, email, phone, bank, accountType, accountNumber } = req.body;

  const accountBook = await AccountBook.create({
    name,
    rut,
    email,
    phone,
    bankId: bank,
    accountTypeId: accountType,
    accountNumber,
  });

  return res.status(200).json({
    message: 'store accountBook controller',
    resources: null,
    data: accountBook,
  });
};
