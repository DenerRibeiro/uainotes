const generalDao = require('../../database/dao/generalDao');
const { Payments } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//this is a test comment

//@dec      Create new payment
//@route    POST /payments
//@access   User
exports.createPayment = asyncHandler(async (req, res) => {
  const obj = req.body;

  obj.date = obj.date.split('/').reverse().join('-');

  const result = await generalDao.create(Payments, obj);

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_CREATE_PAYMENT,
    });
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  } else if (result.name === 'SequelizeValidationError') {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_CREATE_PAYMENT,
    });
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PAYMENT, result);
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});

//@dec      Get all payments
//@route    GET /payments
//@access   User
exports.findAllPayments = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Payments);

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.NOT_FOUND,
    });
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  res.status(200).json({
    success: true,
    data: result,
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

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.NOT_FOUND,
    });
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  res.status(200).json({
    success: true,
    data: result,
  });
});

//@dec      Get a payment by product id
//@route    GET /api/v1/providers/:id/products
//@access   User
exports.findAllPaymentsByProductId = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.findAllByFk(Payments, { productId });

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.NOT_FOUND,
    });
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  res.status(200).json({
    success: true,
    data: result,
  });
});

//@dec      Delete a payment by id
//@route    DELTE /payments/:id/
//@access   User
exports.deletePayment = asyncHandler(async (req, res) => {
  const { paymentId } = req.params;
  const result = await generalDao.delete(Payments, { paymentId });

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.NOT_FOUND,
    });
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  res.status(200).json({
    success: true,
    data: {},
  });
});
