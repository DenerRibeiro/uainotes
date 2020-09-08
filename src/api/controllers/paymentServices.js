const generalDao = require('../../database/dao/generalDao');
const { Payments } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//@dec      Create new payment
//@route    POST /api/v1/payment
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
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});

//@dec      Get all payments
//@route    GET /api/v1/payments
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
