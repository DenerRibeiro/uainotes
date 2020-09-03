const { response } = require('express');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/ErrorResponse');
const logHandler = require('../../../helpers/logHandler');
const path = require('path');

//@func create a provider
exports.create = async (model, object) => {
  const logFilePath = path.join(__dirname, '../../../logs/dao.log');
  const action = `create ${model.name}`;
  try {
    const result = await model.findOrCreate({
      where: { name: object.name, address: object.address },
    });
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return e;
  }
};

//@func get providers
exports.findAll = async (model) => {
  const logFilePath = path.join(__dirname, '../../../logs/dao.log');
  const action = `findAll ${model.name}`;
  try {
    const result = await model.findAll();
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return result;
  }
};

//@func get a procider by Id
exports.findOne = async (model, id) => {
  const logFilePath = path.join(__dirname, '../../../logs/dao.log');
  const action = `findOne ${model.name} id=${id}`;
  try {
    const result = this.findById(model, id);
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return result;
  }
};
