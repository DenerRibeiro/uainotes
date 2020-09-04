const { response } = require('express');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/ErrorResponse');
const logHandler = require('../../../helpers/logHandler');
const path = require('path');

exports.create = async (model, object) => {
  const logFilePath = path.join(__dirname, '../../logs/dao.log');
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

exports.update = async (model, object, id) => {
  const logFilePath = path.join(__dirname, '../../logs/dao.log');
  const action = `update ${model.name} id=${id}`;

  try {
    const result = model.update(object, {
      where: { id: id },
    });
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return e;
  }
};

exports.delete = async (model, id) => {
  const logFilePath = path.join(__dirname, '../../logs/dao.log');
  const action = `delete ${model.name} id=${id}`;
  try {
    const result = model.destroy({
      where: { id },
    });
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return e;
  }
};

exports.findAll = async (model) => {
  const logFilePath = path.join(__dirname, '../../logs/dao.log');
  const action = `findAll ${model.name}`;
  try {
    const result = await model.findAll();
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return e;
  }
};

exports.findOne = async (model, id) => {
  const logFilePath = path.join(__dirname, '../../logs/dao.log');
  const action = `findOne ${model.name} id=${id}`;

  try {
    const result = model.findByPk(id);
    logHandler.success(logFilePath, action);
    return result;
  } catch (e) {
    logHandler.failure(logFilePath, action, e);
    return e;
  }
};
