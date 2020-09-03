const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllProviders,
  createProvider,
} = require('../../api/controllers/providerServices');

router.route('/').get(findAllProviders).post(createProvider);
// router.route('/:id').get(findProvider);

module.exports = router;
