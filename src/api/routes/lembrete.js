const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createLembrete, deleteLembrete, findAllLembretes, findOneLembrete, updateLembrete
} = require('../controllers/lembretesServices');


router.route('/').get(findAllLembretes).post(createLembrete);

router
  .route('/:lembreteId')
  .get(findOneLembrete)
  .put(updateLembrete)
  .delete(deleteLembrete);

module.exports = router;
