const express = require('express');
const router = express.Router({ mergeParams: true });

const { findAll } = require('../../api/controllers/providerServices');

router.route('/').get(findAll);

module.exports = router;
