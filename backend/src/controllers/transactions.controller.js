import Transactions from '../models/transactions.model';

const index = async (req, res) => {
  const transactions = await Transactions.findAll();
  return res.status(200).json({
    message: 'Index transactions controller',
    resources: null,
    data: transactions,
  });
};

export default index;
