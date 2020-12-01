module.exports = {
  //Not found
  NOT_FOUND: { httpCode: 404, message: 'NOT_FOUND' },
  CONTATO_NOT_FOUND: { httpCode: 404, message: 'contato nao encontrado' },
  LEMBRETE_NOT_FOUND: { httpCode: 404, message: 'lembrete nao encontrado' },
  TAREFA_NOT_FOUND: { httpCode: 404, message: 'tarefa nao encontrada' },
  CATEGORIA_NOT_FOUND: { httpCode: 404, message: 'categoria nao encontrada' },

  //Could not create
  COULD_NOT_CREATE: { httpCode: 500, message: 'nao foi possivel adicionar' },
  COULD_NOT_CREATE_CONTATO: { httpCode: 500, message: 'nao foi possivel adicionar contato' },
  COULD_NOT_CREATE_LEMBRETE: { httpCode: 500, message: 'nao foi possivel adicionar lembrete' },
  COULD_NOT_CREATE_LEMBRETE_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel adicionar lembrete devido a data' },
  COULD_NOT_CREATE_TAREFA: { httpCode: 500, message: 'nao foi possivel adicionar tarefa' },
  COULD_NOT_CREATE_TAREFA_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel adicionar tarefa devido a data de termino' },
  COULD_NOT_CREATE_CATEGORIA: { httpCode: 500, message: 'nao foi possivel adicionar categoria' },

  //Could not update
  COULD_NOT_UPDATE: { httpCode: 500, message: 'nao foi possivel alterar' },
  COULD_NOT_UPDATE_CONTATO: { httpCode: 500, message: 'nao foi possivel alterar contato' },
  COULD_NOT_UPDATE_LEMBRETE: { httpCode: 500, message: 'nao foi possivel alterar lembrete' },
  COULD_NOT_UPDATE_TAREFA: { httpCode: 500, message: 'nao foi possivel alterar tarefa' },
  COULD_NOT_UPDATE_CATEGORIA: { httpCode: 500, message: 'nao foi possivel alterar categoria' },

  //Could not delete
  COULD_NOT_DELETE: { httpCode: 500, message: 'nao foi possivel deletar' },
  COULD_NOT_DELETE_CONTATO: { httpCode: 500, message: 'nao foi possivel deletar contato' },
  COULD_NOT_DELETE_LEMBRETE: { httpCode: 500, message: 'nao foi possivel deletar lembrete' },
  COULD_NOT_DELETE_LEMBRETE_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel deletar lembrete devido a data' },
  COULD_NOT_DELETE_TAREFA: { httpCode: 500, message: 'nao foi possivel deletar tarefa' },
  COULD_NOT_DELETE_TAREFA_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel deletar tarefa devido a data de termino' },
  COULD_NOT_DELETE_CATEGORIA: { httpCode: 500, message: 'nao foi possivel deletar categoria' },

  //Wrong parameters
  WRONG_PARAMETERS: { httpCode: 400, message: 'paramentros incorretos' },

  //Empty list
  EMPTY_LIST: { httpCode: 500, message: 'lista vazia' },

  //Already exists
  ALREADY_EXISTS: { httpCode: 500, message: 'ja existe' },
  CONTATO_ALREADY_EXISTS: { httpCode: 500, message: 'contato ja existe' },
  LEMBRETE_ALREADY_EXISTS: { httpCode: 500, message: 'lembrete ja existe' },
  TAREFA_ALREADY_EXISTS: { httpCode: 500, message: 'tarefa ja existe' },
  CATEGORIA_ALREADY_EXISTS: { httpCode: 500, message: 'categoria ja existe' },

  //Failed
  FAILED_TO_AUTHENTICATE: { httpCode: 401, message: 'FAILED_TO_AUTHENTICATE' },
  FAILED_TO_SEND_EMAIL: { httpCode: 500, message: 'FAILED_TO_SEND_EMAIL' },
  FAILED_TO_LOGIN: { httpCode: 401, message: 'FAILED_TO_LOGIN' },
};
