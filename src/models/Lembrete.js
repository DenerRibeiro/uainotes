module.exports = (sequelize, DataTypes) => {
  const Lembrete = sequelize.define('Lembretes', {
    lembreteId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contatoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Contatos', key: 'contatoId' },
    }
  });



  return Lembrete;
};
