const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  creatContato, deleteContatos, findAllContatos, findOneContato, updateContato
} = require('../controllers/contatoServices');


router.route('/').get(findAllContatos).post(creatContato);
router
  .route('/:contatoId')
  .delete(deleteContatos)
  .get(findOneContato)
  .put(updateContato);

module.exports = router;
