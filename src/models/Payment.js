module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payments', {
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
      references: { model: 'Products', key: 'productId' },
    },
    providerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Providers', key: 'providerId' },
    },
  });

  return Payment;
};
