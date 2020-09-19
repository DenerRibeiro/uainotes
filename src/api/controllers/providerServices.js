const generalDao = require('../../database/dao/generalDao');
const { Providers } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

//@dec      Create new provider
//@route    POST /api/v1/providers
//@access   Private
exports.createProvider = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const find = await generalDao.findOneByWhere(Providers, { name });

  if (find) {
    throw new ErrorResponse(errors.PROVIDER_ALREADY_EXISTS);
  }

  const result = await generalDao.create(Providers, req.body);

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PROVIDER);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PROVIDER, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PROVIDER, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_PROVIDER, result);
  }

  res.status(201).json({
    success: true,
    providerData: {
      name: result.dataValues.name,
      address: result.dataValues.address,
      providerId: result.dataValues.providerId,
    },
  });
});

//@dec      Update a providers
//@route    UPDATE /api/v1/providers/:id
//@access   User
exports.updateProvider = asyncHandler(async (req, res) => {
  const { providerId } = req.params;
  const result = await generalDao.update(Providers, req.body, { providerId });

  if (!result[0]) {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PROVIDER, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PROVIDER, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PROVIDER, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_PROVIDER, result);
  }


  res.status(200).json({
    success: true,
  });
});

//@dec      Delete a providers
//@route    DELETE /api/v1/providers/:id
//@access   User
exports.deleteProvider = asyncHandler(async (req, res) => {
  const { providerId } = req.params;
  const result = await generalDao.delete(Providers, { providerId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }


  res.status(200).json({
    success: true,
  });
});

//@dec      Get all providers
//@route    GET /api/v1/providers
//@access   User
exports.findAllProviders = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Providers);

  const providerData = [];
  result.forEach(element => {
    providerData.push({ name: element.name, address: element.address, providerId: element.providerId });
  });

  if (!result || result.length === 0) {
    throw new ErrorResponse(errors.PROVIDER_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.PROVIDER_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    providerData
  });
});

//@dec      Get one  provider
//@route    GET /api/v1/providers:id
//@access   User
exports.findOneProvider = asyncHandler(async (req, res) => {
  const { providerId } = req.params;
  const result = await generalDao.findOneByPk(Providers, providerId);

  if (!result) {
    throw new ErrorResponse(errors.PROVIDER_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_PROVIDER, result);
  }

  res.status(200).json({
    success: true,
    providerData: {
      name: result.dataValues.name,
      address: result.dataValues.address,
      providerId: result.dataValues.providerId,
    }
  });
});
