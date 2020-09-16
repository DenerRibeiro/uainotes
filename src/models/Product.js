module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Products', {
    productId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Product.associate = function associate(models) {
    Product.hasMany(models.Payments, { as: 'payment', foreignKey: 'productId' });
  };
  return Product;
};
