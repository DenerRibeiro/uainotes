const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createTarefas, deleteTarefas, findAllTarefas, findOneTarefas, updateTarefas
} = require('../../api/controllers/tarefaServices');



router.route('/').get(findAllTarefas).post(createTarefas);

router
  .route('/:tarefaId')
  .get(findOneTarefas)
  .put(updateTarefas)
  .delete(deleteTarefas);

module.exports = router;
