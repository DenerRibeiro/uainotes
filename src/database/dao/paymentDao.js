const logHandler = require('../../../helpers/logHandler');
const path = require('path');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');
const { Payment, Provider } = require('../../models');

const getProviderByPayment = async () => {
  const payments = await Provider.getPayments;
  console.log(payments);
};

exports.findAllByProviderFk = async (model, fk) => {
  const logFilePath = path.join(__dirname, '../../../logs/dao.log');
  const action = `find all ${model.name} by fk=${fk}`;

  try {
    const result = model.findAll({ where: { providerId: fk } });
    logHandler.success(logFilePath, action);
    return result;
  } catch (error) {
    logHandler.failure(logHandler, action);
    return error;
  }
};
exports.findAllByProductFk = async (model, fk) => {
  const logFilePath = path.join(__dirname, '../../../logs/dao.log');
  const action = `find all ${model.name} by fk=${fk}`;

  try {
    const result = model.findAll({ where: { productId: fk } });
    logHandler.success(logFilePath, action);
    return result;
  } catch (error) {
    logHandler.failure(logHandler, action);
    return error;
  }
};
