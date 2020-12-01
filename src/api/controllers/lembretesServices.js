const generalDao = require('../../database/dao/generalDao');
const { Lembretes } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');


exports.createLembrete = asyncHandler(async (req, res) => {

  req.body.data = req.body.data.split('/').reverse().join('-');

  const result = await generalDao.create(Lembretes, req.body);

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_LEMBRETE, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_LEMBRETE, result);
  }
  
  res.status(201).json({
    success: true,
    productData: {
      lembreteId: result.dataValues.lembreteId,
      contatoId: result.dataValues.contatoId,
      data: result.dataValues.data.split('-').reverse().join('/'),
      hora: result.dataValues.hora,
      titulo: result.dataValues.titulo
    }
  });
});

exports.updateLembrete = asyncHandler(async (req, res) => {
  req.body.data = req.body.data.split('/').reverse().join('-');

  let { lembreteId } = req.params;

  const result = await generalDao.update(Lembretes, req.body, { lembreteId });

  if (!result[0]) {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_LEMBRETE, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_LEMBRETE, result);
  }

  res.status(200).json({
    success: true

  });
});

exports.deleteLembrete = asyncHandler(async (req, res) => {
  const { lembreteId } = req.params;
  const result = await generalDao.delete(Lembretes, { lembreteId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_LEMBRETE);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_LEMBRETE, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_LEMBRETE, result);
  }


  res.status(200).json({
    success: true,
  });
});


exports.findAllLembretes = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Lembretes);

  if (!result || result.lengtn === 0) {
    throw new ErrorResponse(errors.LEMBRETE_NOT_FOUND);
  }

  const lembretesData = [];
  result.forEach(e => {
    e.dataValues.data = e.dataValues.data.split('-').reverse().join('/');
    lembretesData.push({
      lembreteId: e.dataValues.lembreteId,
      contatoId: e.dataValues.contatoId,
      data: e.dataValues.data,
      hora: e.dataValues.hora,
      titulo: e.dataValues.titulo
    });
  });

  res.status(200).json({
    success: true,
    lembretesData
  });
});

exports.findOneLembrete = asyncHandler(async (req, res) => {
  const { lembreteId } = req.params;
  const result = await generalDao.findOneByPk(Lembretes, lembreteId);

  if (!result) {
    throw new ErrorResponse(errors.LEMBRETE_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.LEMBRETE_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.LEMBRETE_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    lembretesData: {
      lembreteId: result.dataValues.productId,
      data: result.dataValues.data.split('-').reverse().join('/'),
      hora: result.dataValues.hora,
      titulo: result.dataValues.titulo
    },
  });
});
