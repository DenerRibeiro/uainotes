module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Providers', {
    providerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  });

  Provider.associate = function associate(models) {
    Provider.hasMany(models.Payments, { as: 'payment', foreignKey: 'providerId' });
  };

  return Provider;
};
