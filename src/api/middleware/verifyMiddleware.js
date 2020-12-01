
const asyncHandler = require('../../../helpers/asyncHandler');
const ErrorResponse = require('../../../helpers/errors/ErrorResponse');
const errors = require('../../../helpers/errors/errorCodes');

exports.verifyDataAtualDateTerminoTarefa = asyncHandler(async (req, res, next) => {
  let data = req.body.dataTermino;
  data = data.split('/').reverse().join('-');

  let today = new Date();

  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

  if (Date.parse(date) > Date.parse(data)) {
    throw new ErrorResponse(errors.COULD_NOT_CREATE_TAREFA_DATA_TERMINO)
  }

  next();

});