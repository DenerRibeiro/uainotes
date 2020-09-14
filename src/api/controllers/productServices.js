const generalDao = require('../../database/dao/generalDao');
const { Products } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//@dec      Create new product
//@route    POST /api/v1/product
//@access   User
exports.createProduct = asyncHandler(async (req, res) => {
  const obj = req.body;

  const result = await generalDao.create(Products, obj);

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_CREATE_PRODUCT,
    });
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PRODUCT, result);
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});

//@dec      Update a product
//@route    UPDATE /api/v1/products/:id
//@access   User
exports.updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const result = await generalDao.update(Products, req.body, { productId });

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_UPDATE_PRODUCT,
    });
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PRODUCT, result);
  }

  res.status(200).json({
    success: true,
    data: result[0],
  });
});

//@dec      Delete a product
//@route    DELETE /api/v1/products/:id
//@access   User
exports.deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.delete(Products, { productId });

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_DELETE_PRODUCT,
    });
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PRODUCT, result);
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});

//@dec      Get all products
//@route    GET /api/v1/products
//@access   User
exports.findAllProducts = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Products);

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

//@dec      Get one  product
//@route    GET /api/v1/products/:id
//@access   User
exports.findOneProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.findOne(Products, { productId });

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.PRODUCT_NOT_FOUND,
    });
    throw new ErrorResponse(errors.PRODUCT_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});
