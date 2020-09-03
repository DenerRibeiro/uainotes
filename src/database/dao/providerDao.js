// const { Model } = require('sequelize/types');

const { response } = require('express');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/ErrorResponse');

//@func create a provider
exports.createProvider = async (model, object) => {
  const result = await model.findOrCreate({
    where: { name: object.name, address: object.address },
  });

  if (!result[1]) {
    throw new ErrorResponse(500, result);
  }
  return result;
};

//@func get providers
exports.getProviders = async (model) => {
  const result = await model.findAll();
  if (!result) {
    throw new ErrorResponse(500, result);
  }
  console.log(result);
  return result;
};

//@func get a procider by Id
exports.getProvider = async (model, id) => {
  const result = this.findById(model, id);

  if (!result) {
    throw new ErrorResponse(500, result);
  }
  return result;
};
