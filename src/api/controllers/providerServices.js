const providerDao = require('../../database/dao/providerDao');
const Provider = require('../../models/Provider');
const models = require('../../models/index');
const asyncHandler = require('../../../helpers/asyncHandler');
const { nextTick } = require('process');
const ErrorResponse = require('../../../helpers/ErrorResponse');

exports.findAll = asyncHandler(async (req, res) => {
  const result = await providerDao.getProviders(models.Provider);

  if (!result) {
    throw new ErrorResponse(404, result);
  }

  res.status(200).json({
    success: true,
    data: result,
  });
});

exports.create = asyncHandler(async (req, res) => {
  const obj = req.body;

  obj.createdAt = new Date(Date.now);
  obj.updatedAt = new Date(Date.now);

  const result = await providerDao.createProvider(
    models.Provider,
    obj
  );
  if (!result) {
    throw new ErrorResponse(500, 'Could not create provider', result);
  }
  res.status(201).json({
    success: true,
    data: result,
  });
});
