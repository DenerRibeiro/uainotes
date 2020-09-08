const generalDao = require('../../database/dao/generalDao');
const { Provider } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//@dec      Create new provider
//@route    POST /api/v1/providers
//@access   Private
exports.createProvider = asyncHandler(async (req, res, next) => {
  const obj = req.body;

  const result = await generalDao.create(Provider, obj);
  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_CREATE_PROVIDER,
    });
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PROVIDER, result);
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});

//@dec      Update a providers
//@route    UPDATE /api/v1/providers/:id
//@access   User
exports.updateProvider = asyncHandler(async (req, res) => {
  const result = await generalDao.update(
    Provider,
    // JSON.stringify(req.body),
    req.body,
    req.params.id
  );

  console.log(result);

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_UPDATE_PROVIDER,
    });
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PROVIDER, result);
  }

  res.status(200).json({
    success: true,
    data: result[0],
  });
});

//@dec      Delete a providers
//@route    DELETE /api/v1/providers/:id
//@access   User
exports.deleteProvider = asyncHandler(async (req, res) => {
  const result = await generalDao.delete(Provider, req.params.id);

  if (!result) {
    res.status(404).json({
      success: false,
      data: errors.COULD_NOT_DELETE_PROVIDER,
    });
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  res.status(200).json({
    success: true,
    data: {},
  });
});

//@dec      Get all providers
//@route    GET /api/v1/providers
//@access   User
exports.findAllProviders = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Provider);

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

//@dec      Get one  provider
//@route    GET /api/v1/providers:id
//@access   User
exports.findOneProvider = asyncHandler(async (req, res) => {
  const result = await generalDao.findOne(Provider, req.params.id);

  if (!result) {
    res.status(404).json({
      success: false,
      error: errors.PROVIDER_NOT_FOUND,
    });
    throw new ErrorResponse(errors.PROVIDER_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});
