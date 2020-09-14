'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Products', [
      {
        name: 'Morangos',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'Brocolis',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'maxixe',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'Uva',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Products', null, {});
  },
};
