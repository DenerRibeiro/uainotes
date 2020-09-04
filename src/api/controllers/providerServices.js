const providerDao = require('../../database/dao/generalDao');
const Provider = require('../../models/Provider');
const models = require('../../models/index');
const asyncHandler = require('../../../helpers/asyncHandler');
const { nextTick } = require('process');
const ErrorResponse = require('../../../helpers/ErrorResponse');

//@dec      Create new provider
//@route    POST /api/v1/providers
//@access   Private
exports.createProvider = asyncHandler(async (req, res, next) => {
  const obj = req.body;

  obj.createdAt = new Date(Date.now());
  obj.updatedAt = new Date(Date.now());

  console.log(obj);

  const result = await providerDao.create(models.Provider, obj);
  if (!result[1]) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(500, result);
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});

//@dec      Get all providers
//@route    GET /api/v1/providers
//@access   Public
exports.findAllProviders = asyncHandler(async (req, res) => {
  const result = await providerDao.findAll(models.Provider);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(404, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});

//@dec      Get one  providers
//@route    GET /api/v1/providers
//@access   User
exports.findOneProvider = asyncHandler(async (req, res) => {
  const result = await providerDao.findOne(
    models.Provider,
    req.params.id
  );

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(404, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});

//@dec      Update a providers
//@route    UPDATE /api/v1/providers
//@access   User
exports.updateProvider = asyncHandler(async (req, res) => {
  const result = await providerDao.update(
    models.Provider,
    // JSON.stringify(req.body),
    req.body,
    req.params.id
  );

  console.log(result);

  if (!result) {
    res.status(404).json({
      success: false,
      data: {},
    });
    throw new ErrorResponse(404, result);
  }

  res.status(200).json({
    success: true,
    data: result[0],
  });
});
