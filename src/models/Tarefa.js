module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefas', {
    tarefaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    dataInicio: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dataTermino: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    descricao: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    prioridade: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    contatoId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Contatos', key: 'contatoId' },
    },
    categoriaId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: 'Categorias', key: 'categoriaId' },
    }
  });


  return Tarefa;
};
