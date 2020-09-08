module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payments', {
    amount: DataTypes.FLOAT,
    price: DataTypes.FLOAT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Product', key: 'id' },
    },
    providerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Provider', key: 'id' },
    },
  });

  Payment.associate = function associate(models) {
    Payment.belongsTo(models.Product, { foreignKey: 'productId', as: 'product' });
  };

  return Payment;
};
