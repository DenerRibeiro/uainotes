const generalDao = require('../../database/dao/generalDao');
const { Contatos } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

exports.creatContato = asyncHandler(async (req, res, next) => {
  const obj = req.body;

  const result = await generalDao.create(Contatos, obj);

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_CONTATO, result);
  }
  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_CONTATO, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_CONTATO, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_CONTATO, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_CONTATO, result);
  }

  res.status(201).json({
    success: true,
    contatoDados: {
      contatoId: result.dataValues.contatoId,
      nome: result.dataValues.nome,
      email: result.dataValues.email,
      endereco: result.dataValues.endereco,
      telefone: result.dataValues.telefone,
      celular: result.dataValues.celular,
    }
  });
});

exports.findAllContatos = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Contatos);

  if (!result || result.length == 0) {
    throw new ErrorResponse(errors.NOT_FOUND, result);
  }
  const contatosData = [];
  result.forEach((e) => {
    contatosData.push({
      success: true,
      contatoDados: {
      contatoId: e.dataValues.contatoId,
      nome: e.dataValues.nome,
      email: e.dataValues.email,
      endereco: e.dataValues.endereco,
      telefone: e.dataValues.telefone,
      celular: e.dataValues.celular,
      }
    })
  })

  res.status(200).json({
    contatosData
  });
});

exports.deleteContatos = asyncHandler(async (req, res) => {
  const { contatoId } = req.params;
  const result = await generalDao.delete(Contatos, { contatoId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CONTATO, result);
  }

  if (result.name === 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CONTATO, result);
  }
  if (result.name === 'SequelizeForeignKeyConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CONTATO, result);
  }
  if (result.name === 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CONTATO, result);
  }
  if (result.name === 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_CONTATO, result);
  }
  res.status(200).json({
    success: true,
  });
});
