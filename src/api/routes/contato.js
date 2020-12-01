const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  creatContato, deleteContatos, findAllContatos, findOneContato, updateContato, findOneContatoByName
} = require('../controllers/contatoServices');

const {
  verifyEmail
} = require('../middleware/verifyMiddleware');

router.route('/').get(findAllContatos).post(verifyEmail, creatContato);
router
  .route('/:contatoId')
  .delete(deleteContatos)
  .get(findOneContato)
  .put(updateContato);

router.route('/find/nome').get(findOneContatoByName);


module.exports = router;
