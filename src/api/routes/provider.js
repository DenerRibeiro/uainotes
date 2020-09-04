const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllProviders,
  createProvider,
  findOneProvider,
  updateProvider,
  deleteProvider,
} = require('../../api/controllers/providerServices');

router.route('/').get(findAllProviders).post(createProvider);
router
  .route('/:id')
  .get(findOneProvider)
  .put(updateProvider)
  .delete(deleteProvider);

module.exports = router;
