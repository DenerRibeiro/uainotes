// const { Model } = require('sequelize/types');

const { response } = require('express');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/ErrorResponse');

exports.createProvider = async (model, object) => {
  const result = await model.findOrCreate({
    where: { name: object.name },
  });
  if (!result[1]) {
    throw new ErrorResponse(500, 'Provider already exists', result);
  }
  return result;
};

exports.getProviders = asyncHandler(async (model) => {
  console.log('get all providers');
  const result = await model.findAll();
  return result;
});

exports.findById = asyncHandler(async (model, id) => {
  const result = await model.findByPk(id);
  return result;
});
