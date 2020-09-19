const generalDao = require('../../database/dao/generalDao');
const { Payments } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//this is a test comment

//@dec      Create new payment
//@route    POST /payments
//@access   User
exports.createPayment = asyncHandler(async (req, res, next) => {
  const obj = req.body;

  obj.date = obj.date.split('/').reverse().join('-'); 

  if (obj.amount && obj.amount <= 0) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT);
  }
  const result = await generalDao.create(Payments, obj);

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }
  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }

  res.status(201).json({
    success: true,
    paymentData: {
      amount: result.dataValues.amount,
      price: result.dataValues.price,
      paymentId: result.dataValues.paymentId,
      productId: result.dataValues.productId,
      providerId: result.dataValues.providerId,
      date: result.dataValues.date.split('-').reverse().join('/'),

    },
  });
});

//@dec      Get all payments
//@route    GET /payments
//@access   User
exports.findAllPayments = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Payments);

  if (!result || result.length == 0) {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }

  const paymentData = [];
  result.forEach((e) => {
    paymentData.push({
      amount: e.amount,
      price: e.price,
      paymentId: e.paymentId,
      productId: e.productId,
      providerId: e.providerId,
      date: e.date.split('-').reverse().join('/')
    })
  })

  res.status(200).json({
    success: true,
    paymentData
  });
});

//@dec      Get all payment by provider id
//@route    GET /providers/:id/payments
//@access   User
exports.findAllPaymentsByProviderId = asyncHandler(async (req, res) => {
  const { providerId } = req.params;

  const result = await generalDao.findAllByFk(Payments, {
    providerId,
  });

  if (!result || result.length == 0) {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }

  const paymentData = [];
  result.forEach((e) => {
    paymentData.push({
      amount: e.amount,
      price: e.price,
      paymentId: e.paymentId,
      productId: e.productId,
      providerId: e.providerId,
      date: e.date.split('-').reverse().join('/')
    })
  })

  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    paymentData
  });
});

//@dec      Get a payment by product id
//@route    GET /api/v1/providers/:id/products
//@access   User
exports.findAllPaymentsByProductId = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.findAllByFk(Payments, { productId });

  if (!result || result.length == 0) {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  const paymentData = [];
  result.forEach((e) => {
    paymentData.push({
      amount: e.amount,
      price: e.price,
      paymentId: e.paymentId,
      productId: e.productId,
      providerId: e.providerId,
      date: e.date.split('-').reverse().join('/')
    })
  })

  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    paymentData
  });
});

//@dec      Delete a payment by id
//@route    DELTE /payments/:id/
//@access   User
exports.deletePayment = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;
  const result = await generalDao.delete(Payments, { paymentId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PAYMENT, result);
  }

  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PAYMENT, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PAYMENT, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PAYMENT, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PAYMENT, result);
  }
  res.status(200).json({
    success: true,
  });
});
