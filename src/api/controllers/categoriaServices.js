const generalDao = require('../../database/dao/generalDao');
const { Categorias } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

exports.createCategoria = asyncHandler(async (req, res) => {

  const result = await generalDao.create(Categorias, req.body);

  if (!result) {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_CATEGORIA);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_CATEGORIA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_CATEGORIA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_CATEGORIA, result);
  }

  res.status(201).json({
    success: true,
    categoriaData: {
      categoriaId: result.dataValues.categoriaId,
      nome: result.dataValues.nome,
    },
  });
});


exports.updateCategoria = asyncHandler(async (req, res) => {
  const { categoriaId } = req.params;
  const result = await generalDao.update(Categorias, req.body, { categoriaId });

  if (!result[0]) {
    throw new ErrorResponse(errors.NAO_PODE_ALTERAR_CATEGORIA, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.NAO_PODE_ALTERAR_CATEGORIA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.NAO_PODE_ALTERAR_CATEGORIA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.NAO_PODE_ALTERAR_CATEGORIA, result);
  }


  res.status(200).json({
    success: true,
  });
});

exports.deleteCategoria = asyncHandler(async (req, res) => {
  const { categoriaId } = req.params;
  const result = await generalDao.delete(Categorias, { categoriaId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CATEGORIA, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CATEGORIA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CATEGORIA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CATEGORIA, result);
  }


  res.status(200).json({
    success: true,
  });
});

exports.findAllCategorias = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Categorias);

  const providerData = [];
  result.forEach(e => {
    providerData.push({
      categoriaId: e.dataValues.categoriaId,
      nome: e.dataValues.nome,
    });
  });

  if (!result || result.length === 0) {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    providerData
  });
});


exports.findOneCategoria = asyncHandler(async (req, res) => {
  const { categoriaId } = req.params;
  const result = await generalDao.findOneByPk(Categorias, categoriaId);

  if (!result) {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.CATEGORIA_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    providerData: {
      categoriaId: result.dataValues.categoriaId,
      nome: result.dataValues.nome,
    }
  });
});
