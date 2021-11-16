import sequelize from '../config/database';
import AccountType from './accountType.model';

const { DataTypes, Model } = require('sequelize');

class AccountBook extends Model { }

AccountBook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    accountTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'account_type_id',
    },
    bankId: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'bank_id',
    },
    rut: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'rut',
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
      field: 'name',
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false,
      field: 'email',
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'phone',
    },
    accountNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'account_number',
    },
  },
  {
    sequelize,
    modelName: 'AccountBook',
    tableName: 'account_book',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

AccountBook.belongsTo(AccountType, {
  foreignKey: 'accountTypeId',
  as: 'accountType',
});

export default AccountBook;
