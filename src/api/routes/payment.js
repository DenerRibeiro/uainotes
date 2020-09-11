const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllPayments,
  createPayment,
  findAllPaymentsByProviderId,
  findAllPaymentsByProductId,
} = require('../controllers/paymentServices');

router.route('/providers/:id').get(findAllPaymentsByProviderId);
router.route('/products/:id').get(findAllPaymentsByProductId);

router.route('/').get(findAllPayments).post(createPayment);

module.exports = router;
