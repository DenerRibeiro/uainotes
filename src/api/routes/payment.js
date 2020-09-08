const express = require('express');
const router = express.Router({ mergeParams: true });

const { findAllPayments, createPayment } = require('../controllers/paymentServices');

router.route('/').get(findAllPayments).post(createPayment);

module.exports = router;
