import sequelize from '../config/database';

const { DataTypes, Model } = require('sequelize');

class AccountType extends Model { }

AccountType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'name',
    },
  },
  {
    sequelize,
    modelName: 'AccountType',
    tableName: 'account_type',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default AccountType;
