const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createLembrete, deleteLembrete, findAllLembretes, findOneLembrete, updateLembrete
} = require('../controllers/lembretesServices');

const {
  verifyDataAtualDateTerminoLembrete, verifyDataAtualDeleteLembrete
} = require('../middleware/verifyMiddleware')


router.route('/').get(findAllLembretes).post(verifyDataAtualDateTerminoLembrete, createLembrete);

router
  .route('/:lembreteId')
  .get(findOneLembrete)
  .put(updateLembrete)
  .delete(verifyDataAtualDeleteLembrete, deleteLembrete);

module.exports = router;
