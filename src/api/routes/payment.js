const express = require('express');
const router = express.Router({ mergeParams: true });

const { findAllPayments } = require('../controllers/paymentServices');

router.route('/').get(findAllPayments);

module.exports = router;
