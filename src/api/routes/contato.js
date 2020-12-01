const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  creatContato, deleteContatos, findAllContatos
} = require('../controllers/contatoServices');


router.route('/').get(findAllContatos).post(creatContato);
router.route('/:contatoId').delete(deleteContatos);

module.exports = router;
