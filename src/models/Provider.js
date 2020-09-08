module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Provider.associate = function associate(models) {
    Provider.hasMany(models.Payments, { as: 'payment', foreignKey: 'providerId' });
  };
  return Provider;
};
