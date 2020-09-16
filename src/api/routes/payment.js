const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  findAllPayments,
  createPayment,
  findAllPaymentsByProviderId,
  findAllPaymentsByProductId,
  deletePayment,
} = require('../controllers/paymentServices');

router.route('/providers/:providerId').get(findAllPaymentsByProviderId);
router.route('/products/:productId').get(findAllPaymentsByProductId);

router.route('/').get(findAllPayments).post(createPayment);
router.route('/:paymentId').delete(deletePayment);

module.exports = router;
