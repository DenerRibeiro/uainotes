'use strict';
const DataTypes = require('sequelize/lib/data-types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payment', {
      paymentId: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      providerId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Payments');
  },
};
