module.exports = (sequelize, DataTypes) => {
  const Contato = sequelize.define('Contatos', {
    contatoId: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    endereco: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    telefone: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    celular: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  Contato.associate = function associate(models) {
    Contato.hasMany(models.Lembretes, { as: 'lembrete', foreignKey: 'contatoId' });
  };
  Contato.associate = function associate(models) {
    Contato.hasMany(models.Tarefas, { as: 'tarefa', foreignKey: 'contatoId' });
  };



  return Contato;
};
