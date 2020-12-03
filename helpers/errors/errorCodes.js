module.exports = {
  //Not found
  NOT_FOUND: { httpCode: 404, message: 'NOT_FOUND' },
  CONTATO_NOT_FOUND: { httpCode: 404, message: 'contato nao encontrado' },
  LEMBRETE_NOT_FOUND: { httpCode: 404, message: 'lembrete nao encontrado' },
  TAREFA_NOT_FOUND: { httpCode: 404, message: 'tarefa nao encontrada' },
  CATEGORIA_NOT_FOUND: { httpCode: 404, message: 'categoria nao encontrada' },

  //Could not create
  NAO_PODE_CRIAR: { httpCode: 500, message: 'nao foi possivel adicionar' },
  NAO_PODE_CRIAR_CONTATO: { httpCode: 500, message: 'nao foi possivel adicionar contato' },
  NAO_PODE_CRIAR_LEMBRETE: { httpCode: 500, message: 'nao foi possivel adicionar lembrete' },
  NAO_PODE_CRIAR_LEMBRETE_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel adicionar lembrete devido a data' },
  NAO_PODE_CRIAR_TAREFA: { httpCode: 500, message: 'nao foi possivel adicionar tarefa' },
  NAO_PODE_CRIAR_TAREFA_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel adicionar tarefa devido a data de termino' },
  NAO_PODE_CRIAR_CATEGORIA: { httpCode: 500, message: 'nao foi possivel adicionar categoria' },

  //Could not update
  NAO_PODE_ALTERAR: { httpCode: 500, message: 'nao foi possivel alterar' },
  NAO_PODE_ALTERAR_CONTATO: { httpCode: 500, message: 'nao foi possivel alterar contato' },
  NAO_PODE_ALTERAR_LEMBRETE: { httpCode: 500, message: 'nao foi possivel alterar lembrete' },
  NAO_PODE_ALTERAR_TAREFA: { httpCode: 500, message: 'nao foi possivel alterar tarefa' },
  NAO_PODE_ALTERAR_CATEGORIA: { httpCode: 500, message: 'nao foi possivel alterar categoria' },

  //Could not delete
  NAO_PODE_DELETAR: { httpCode: 500, message: 'nao foi possivel deletar' },
  NAO_PODE_DELETAR_CONTATO: { httpCode: 500, message: 'nao foi possivel deletar contato' },
  NAO_PODE_DELETAR_LEMBRETE: { httpCode: 500, message: 'nao foi possivel deletar lembrete' },
  NAO_PODE_DELETAR_LEMBRETE_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel deletar lembrete devido a data' },
  NAO_PODE_DELETAR_TAREFA: { httpCode: 500, message: 'nao foi possivel deletar tarefa' },
  NAO_PODE_DELETAR_TAREFA_DATA_TERMINO: { httpCode: 500, message: 'nao foi possivel deletar tarefa devido a data de termino' },
  NAO_PODE_DELETAR_CATEGORIA: { httpCode: 500, message: 'nao foi possivel deletar categoria' },

};
