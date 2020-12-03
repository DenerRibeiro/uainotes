
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');
const generalDao = require('../../database/dao/generalDao');
const { Tarefas } = require('../../models');
const { Lembretes } = require('../../models');

exports.verifyDataAtualDateTerminoTarefa = asyncHandler(async (req, res, next) => {
  let data = req.body.dataTermino;
  data = data.split('/').reverse().join('-');

  let today = new Date();

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  if (Date.parse(date) > Date.parse(data)) {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_TAREFA_DATA_TERMINO)
  }

  next();

});
exports.verifyDataAtualDateTerminoLembrete = asyncHandler(async (req, res, next) => {
  let data = req.body.data;
  data = data.split('/').reverse().join('-');

  let today = new Date();

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  if (Date.parse(date) > Date.parse(data)) {
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_LEMBRETE_DATA_TERMINO)
  }

  next();

});

exports.verifyDataAtualDeleteTarefa = asyncHandler(async (req, res, next) => {
  const { tarefaId } = req.params;
  const result = await generalDao.findOneByPk(Tarefas, tarefaId);


  let data = result.dataTermino.split('/').reverse().join('-');

  let today = new Date();

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  if (Date.parse(date) > Date.parse(data)) {
    throw new ErrorResponse(errors.NAO_PODE_DELETAR_TAREFA_DATA_TERMINO)
  }

  next();

});

exports.verifyDataAtualDeleteLembrete = asyncHandler(async (req, res, next) => {
  const { lembreteId } = req.params;
  const result = await generalDao.findOneByPk(Lembretes, lembreteId);


  let data = result.data.split('/').reverse().join('-');

  let today = new Date();

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  if (Date.parse(date) > Date.parse(data)) {
    throw new ErrorResponse(errors.NAO_PODE_DELETAR_LEMBRETE_DATA_TERMINO)
  }

  next();

});

exports.verifyEmail = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  let f = false;
  if (email) {
    [...email].forEach(e => {
      if (e == '@') f = true
    });
  }
  if (email && f) next();
  else if (email && !f)
    throw new ErrorResponse(errors.NAO_PODE_CRIAR_CONTATO);
  else next();
});