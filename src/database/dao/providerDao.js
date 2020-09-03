// const { Model } = require('sequelize/types');

const { response } = require('express');

exports.createProvider = async (providerModel, object) => {
  const result = await providerModel.create(object);
};

exports.getProviders = async (providerModel) => {
  console.log('get all providers');
  const result = await providerModel.findAll();
  return result;
};
