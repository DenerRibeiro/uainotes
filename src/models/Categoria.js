module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categorias', {
    categoriaId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  Categoria.associate = function associate(models) {
    Categoria.hasMany(models.Tarefas, { as: 'tarefa', foreignKey: 'categoriaId' });
  };


  return Categoria;
};
