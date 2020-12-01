const generalDao = require('../../database/dao/generalDao');
const { Tarefas } = require('../../models');
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

exports.createTarefas = asyncHandler(async (req, res) => {

  req.body.dataInicio = req.body.dataInicio.split('/').reverse().join('-');
  req.body.dataTermino = req.body.dataTermino.split('/').reverse().join('-');

  const result = await generalDao.create(Tarefas, req.body);


  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_TAREFA);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_TAREFA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_TAREFA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_TAREFA, result);
  }

  res.status(201).json({
    success: true,
    tarefasData: {
      tarefaId: result.dataValues.tarefaId,
      contatoId: result.dataValues.contatoId,
      categoriaId: result.dataValues.categoriaId,
      dataInicio: result.dataValues.dataInicio.split('-').reverse().join('/'),
      dataTermino: result.dataValues.dataTermino.split('-').reverse().join('/'),
      titulo: result.dataValues.titulo,
      descricao: result.dataValues.descricao,
      prioridade: result.dataValues.prioridade,
    },
  });
});


exports.updateTarefas = asyncHandler(async (req, res) => {
  const { tarefaId } = req.params;


  req.body.dataInicio = req.body.dataInicio.split('/').reverse().join('-');
  req.body.dataTermino = req.body.dataTermino.split('/').reverse().join('-');

  const result = await generalDao.update(Tarefas, req.body, { tarefaId });

  if (!result[0]) {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_TAREFA, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_TAREFA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_TAREFA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_UPDATE_TAREFA, result);
  }


  res.status(200).json({
    success: true,
  });
});

exports.deleteTarefas = asyncHandler(async (req, res) => {
  const { tarefaId } = req.params;
  const result = await generalDao.delete(Tarefas, { tarefaId });

  if (!result) {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_TAREFA, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_TAREFA, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_TAREFA, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.COULD_NOT_DELETE_TAREFA, result);
  }


  res.status(200).json({
    success: true,
  });
});

exports.findAllTarefas = asyncHandler(async (req, res) => {
  const result = await generalDao.findAll(Tarefas);

  const providerData = [];
  result.forEach(e => {
    providerData.push({
      tarefaId: e.dataValues.tarefaId,
      contatoId: e.dataValues.contatoId,
      categoriaId: e.dataValues.categoriaId,
      dataInicio: e.dataValues.dataInicio.split('-').reverse().join('/'),
      dataTermino: e.dataValues.dataTermino.split('-').reverse().join('/'),
      titulo: e.dataValues.titulo,
      descricao: e.dataValues.descricao,
      prioridade: e.dataValues.prioridade,
    });
  });

  if (!result || result.length === 0) {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    providerData
  });
});


exports.findOneTarefas = asyncHandler(async (req, res) => {
  const { tarefaId } = req.params;
  const result = await generalDao.findOneByPk(Tarefas, tarefaId);

  if (!result) {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }
  if (result.name == 'SequelizeValidationError') {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeUniqueConstraintError') {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }

  if (result.name == 'SequelizeDatabaseError') {
    throw new ErrorResponse(errors.TAREFA_NOT_FOUND, result);
  }

  res.status(200).json({
    success: true,
    tarefaData: {
      tarefaId: result.dataValues.tarefaId,
      contatoId: result.dataValues.contatoId,
      categoriaId: result.dataValues.categoriaId,
      dataInicio: result.dataValues.dataInicio.split('-').reverse().join('/'),
      dataTermino: result.dataValues.dataTermino.split('-').reverse().join('/'),
      titulo: result.dataValues.titulo,
      descricao: result.dataValues.descricao,
      prioridade: result.dataValues.prioridade,
    }
  });
});
