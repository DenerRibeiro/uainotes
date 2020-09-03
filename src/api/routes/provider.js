const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAll,
  create,
} = require('../../api/controllers/providerServices');

router.route('/').get(findAll).post(create);
// router.route('/:id').get(findProvider);

module.exports = router;
