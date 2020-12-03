const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createTarefas, deleteTarefas, findAllTarefas, findOneTarefas, updateTarefas
} = require('../../api/controllers/tarefaServices');

const {
  verifyDataAtualDateTerminoTarefa, verifyDataAtualDeleteTarefa
} = require('../../api/middleware/verifyMiddleware')



router.route('/').get(findAllTarefas).post(verifyDataAtualDateTerminoTarefa, createTarefas);

router
  .route('/:tarefaId')
  .get(findOneTarefas)
  .put(updateTarefas)
  .delete(verifyDataAtualDeleteTarefa, deleteTarefas);

module.exports = router;
