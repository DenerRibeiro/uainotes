const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllPayments,
  createPayment,
  findAllPaymentsByProviderId,
} = require('../controllers/paymentServices');

router.route('/').get(findAllPaymentsByProviderId).post(createPayment);

module.exports = router;
