module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
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
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });

  Provider.associate = function associate(models) {
    Provider.hasMany(models.Payment, { as: 'payment', foreignKey: 'providerId' });
  };

  return Provider;
};
