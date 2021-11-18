import Transactions from '../models/transactions.model';
import Transfer from '../models/transfer.model';
import AccountBook from '../models/accountBook.model';
import AccountType from '../models/accountType.model';

const index = async (req, res) => {
  const transactions = await Transactions.findAll({
    include: [
      {
        model: Transfer,
        as: 'transfer',
        foreignKey: 'operationId',
        include: [
          {
            model: AccountBook,
            as: 'accountBook',
            foreignKey: 'accountBookId',
            include: [
              {
                model: AccountType,
                foreignKey: 'accountTypeId',
                as: 'accountType',
              },
            ],
          },
        ],
      },
    ],
  });
  return res.status(200).json({
    message: 'Index transactions controller',
    resources: null,
    data: transactions,
  });
};

export default index;
