const generalDao = require('../../database/dao/generalDao');
const { Product } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/ErrorResponse');
const { errors } = require('../../../helpers/errors/errorCodes');

//@dec      Create new product
//@route    POST /api/v1/product
//@access   User
exports.createProduct = asyncHandler(async (req, res) => {
  const obj = req.body;

  obj.createdAt = new Date(Date.now());
  obj.updatedAt = new Date(Date.now());

  const result = await generalDao.create(Product, obj);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
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
  const result = await generalDao.update(Product, req.body, req.params.id);

  console.log(result);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
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
  const result = await generalDao.delete(Product, req.params.id);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
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
  const result = await generalDao.findAll(Product);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(errors.EMPTY_LIST, result);
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
  const result = await generalDao.findOne(Product, req.params.id);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(errors.COULD_NOT_FIND_PRODUCT, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});
