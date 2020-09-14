'use strict';

// const { DataTypes } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Providers', [
      {
        name: 'Maria Antonia Ribeiro',
        address: 'Ribeirão das pedras',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'José Maria Ribeiro',
        address: 'Ribeirão das pedras',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'Diego Marques Ribeiro',
        address: 'Villa',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'Dener José Ribeiro',
        address: 'Ribeirão das pedras',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
      {
        name: 'Monique Alessandra Pereira Almeida',
        address: 'Estiva',
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Providers', null, {});
  },
};
