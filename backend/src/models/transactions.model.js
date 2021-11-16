import sequelize from '../config/database';

const { DataTypes, Model } = require('sequelize');

class Transactions extends Model { }

Transactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    operationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'operation_id',
    },
    operationType: {
      type: DataTypes.STRING(3),
      allowNull: false,
      field: 'operation_type',
    },
    codeReference: {
      type: DataTypes.STRING(256),
      allowNull: false,
      field: 'code_reference',
    },
    amount: {
      type: DataTypes.DECIMAL(18, 2),
      allowNull: false,
      field: 'amount',
    },
  },
  {
    sequelize,
    modelName: 'Transactions',
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: false,
  }
);

export default Transactions;
