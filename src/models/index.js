const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database.js');

const db = {};
const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync({ alter: true });

module.exports = db;

//----------------------------------------

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const config = require('../api/config/database.js');

// const db = {};

// const sequelize = new Sequelize(config);

// fs.readdirSync(__dirname)
//   .filter(
//     (file) =>
//       file.indexOf('.') !== 0 &&
//       file !== path.basename(__filename) &&
//       file.slice(-3) === '.js'
//   )
//   .forEach((file) => {
//     // const model = sequelize.import(path.join(__dirname, file));
//     const model = require(path.join(__dirname, file))(
//       sequelize,
//       Sequelize
//     );
//     db[model.name] = model;
//   });

// Object.keys(db).forEach((modelName) => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.sequelize.sync({ alter: true });

// module.exports = db;
