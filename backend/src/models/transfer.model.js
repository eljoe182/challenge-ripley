import sequelize from '../config/database';
import AccountBook from './accountBook.model';

const { DataTypes, Model } = require('sequelize');

class Transfer extends Model { }

Transfer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    accountBookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'account_book_id',
    },
    amount: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: 'amount',
    },
  },
  {
    sequelize,
    modelName: 'Transfer',
    tableName: 'Transfer',
    createdAt: 'created_at',
    updatedAt: false,
  }
);

Transfer.belongsTo(AccountBook, {
  foreignKey: 'accountBookId',
  as: 'accountBook',
});

export default Transfer;
