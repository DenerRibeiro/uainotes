module.exports = {
  //Not found
  NOT_FOUND: { httpCode: 404, message: 'NOT_FOUND' },
  CONTATO_NOT_FOUND: { httpCode: 404, message: 'CONTATO_NOT_FOUND' },
  LEMBRETE_NOT_FOUND: { httpCode: 404, message: 'LEMBRETE_NOT_FOUND' },
  TAREFA_NOT_FOUND: { httpCode: 404, message: 'TAREFA_NOT_FOUND' },
  CATEGORIA_NOT_FOUND: { httpCode: 404, message: 'CATEGORIA_NOT_FOUND' },

  //Could not create
  COULD_NOT_CREATE: { httpCode: 500, message: 'COULD_NOT_CREATE' },
  COULD_NOT_CREATE_CONTATO: { httpCode: 500, message: 'COULD_NOT_CREATE_CONTATO' },
  COULD_NOT_CREATE_LEMBRETE: { httpCode: 500, message: 'COULD_NOT_CREATE_LEMBRETE' },
  COULD_NOT_CREATE_TAREFA: { httpCode: 500, message: 'COULD_NOT_CREATE_TAREFA' },
  COULD_NOT_CREATE_TAREFA_DATA_TERMINO: { httpCode: 500, message: 'COULD_NOT_CREATE_TAREFA_DATA_TERMINO' },
  COULD_NOT_CREATE_CATEGORIA: { httpCode: 500, message: 'COULD_NOT_CREATE_CATEGORIA' },

  //Could not update
  COULD_NOT_UPDATE: { httpCode: 500, message: 'COULD_NOT_UPDATE' },
  COULD_NOT_UPDATE_CONTATO: { httpCode: 500, message: 'COULD_NOT_UPDATE_LEMBRETE' },
  COULD_NOT_UPDATE_LEMBRETE: { httpCode: 500, message: 'COULD_NOT_UPDATE_LEMBRETE' },
  COULD_NOT_UPDATE_TAREFA: { httpCode: 500, message: 'COULD_NOT_UPDATE_TAREFA' },
  COULD_NOT_UPDATE_CATEGORIA: { httpCode: 500, message: 'COULD_NOT_UPDATE_CATEGORIA' },

  //Could not delete
  COULD_NOT_DELETE: { httpCode: 500, message: 'COULD_NOT_DELETE' },
  COULD_NOT_DELETE_CONTATO: { httpCode: 500, message: 'COULD_NOT_DELETE_CONTATO' },
  COULD_NOT_DELETE_LEMBRETE: { httpCode: 500, message: 'COULD_NOT_DELETE_LEMBRETE' },
  COULD_NOT_DELETE_TAREFA: { httpCode: 500, message: 'COULD_NOT_DELETE_TAREFA' },
  COULD_NOT_DELETE_CATEGORIA: { httpCode: 500, message: 'COULD_NOT_DELETE_CATEGORIA' },

  //Wrong parameters
  WRONG_PARAMETERS: { httpCode: 400, message: 'WRONG_PARAMETERS' },

  //Empty list
  EMPTY_LIST: { httpCode: 500, message: 'EMPTY_LIST' },

  //Already exists
  ALREADY_EXISTS: { httpCode: 500, message: 'ALREADY_EXISTS' },
  CONTATO_ALREADY_EXISTS: { httpCode: 500, message: 'CONTATO_ALREADY_EXISTS' },
  LEMBRETE_ALREADY_EXISTS: { httpCode: 500, message: 'LEMBRETE_ALREADY_EXISTS' },
  USERNAME_ALREADY_EXISTS: { httpCode: 500, message: 'USERNAME_ALREADY_EXISTS' },

  //Failed
  FAILED_TO_AUTHENTICATE: { httpCode: 401, message: 'FAILED_TO_AUTHENTICATE' },
  FAILED_TO_SEND_EMAIL: { httpCode: 500, message: 'FAILED_TO_SEND_EMAIL' },
  FAILED_TO_LOGIN: { httpCode: 401, message: 'FAILED_TO_LOGIN' },
};
