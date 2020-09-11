const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllProviders,
  createProvider,
  findOneProvider,
  updateProvider,
  deleteProvider,
} = require('../../api/controllers/providerServices');

//Include other resource routers
const paymentRouter = require('./payment');
const productRouter = require('./product');

// //Re-route into other routes
// router.use('/:id/payments', paymentRouter);

router.route('/').get(findAllProviders).post(createProvider);

router.route('/:id').get(findOneProvider).put(updateProvider).delete(deleteProvider);

module.exports = router;
