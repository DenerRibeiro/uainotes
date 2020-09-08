const logHandler = require('../../../helpers/logHandler');
const path = require('path');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');
const { Payment, Provider } = require('../../models');

const getProviderByPayment = async () => {
  const payments = await Provider.getPayments;
  console.log(payments);
};

getProviderByPayment();
