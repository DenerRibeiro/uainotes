const generalDao = require('../../database/dao/generalDao');
const { Products } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//@dec      Create new product
//@route    POST /api/v1/product
//@access   User
exports.createProduct = asyncHandler(async (req, res) => {
  let { name } = req.body;

  const find = await generalDao.findOneByWhere(Products, { name });

  if (find) {
    throw new ErrorResponse(errors.PRODUCT_ALREADY_EXISTS);
  }

  const result = await generalDao.create(Products, req.body);

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PRODUCT, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PRODUCT, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PRODUCT, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PRODUCT, result);
  }

  res.status(201).json({
    success: true,
    productData: {
      productId: result.dataValues.productId,
      name: result.dataValues.name
    }
  });
});

//@dec      Update a product
//@route    UPDATE /api/v1/products/:id
//@access   User
exports.updateProduct = asyncHandler(async (req, res) => {
  let { productId } = req.params;

  const result = await generalDao.update(Products, req.body, { productId });

  if (!result[0]) {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PRODUCT, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PRODUCT, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PRODUCT, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PRODUCT, result);
  }

  res.status(200).json({
    success: true

  });
});

//@dec      Delete a product
//@route    DELETE /api/v1/products/:id
//@access   User
exports.deleteProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.delete(Products, { productId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PRODUCT);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PRODUCT, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PRODUCT, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PRODUCT, result);
  }
  

  res.status(200).json({
    success: true,
    productData: {},
  });
});

//@dec      Get all products
//@route    GET /products
//@access   User
exports.findAllProducts = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Products);

  if (!result || result.lengtn === 0) {
    throw new ErrorResponse(errors.PRODUCT_NOT_FOUND);
  }

  const productData = [];
  result.forEach(element => {
    productData.push({ name: element.name, productId: element.productId });
  });

  res.status(200).json({
    success: true,
    productData
  });
});

//@dec      Get one  product
//@route    GET /api/v1/products/:id
//@access   User
exports.findOneProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const result = await generalDao.findOneByPk(Products, productId);

  if (!result) {
    throw new ErrorResponse(errors.PRODUCT_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.PRODUCT_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.PRODUCT_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    productData: {
      productId: result.dataValues.productId,
      name: result.dataValues.name
    },
  });
});
