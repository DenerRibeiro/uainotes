module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Product.associate = function associate(models) {
    Product.hasMany(models.Payments, { as: 'payment', foreignKey: 'productId' });
  };
  return Product;
};
