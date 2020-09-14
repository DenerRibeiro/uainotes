const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createProduct,
  deleteProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
} = require('../controllers/productServices');

//Get other route
// const paymentRouter = require('./payment');

//Re-route
// router.use('/:id/payments', paymentRouter);

router.route('/').get(findAllProducts).post(createProduct);

router
  .route('/:productId')
  .get(findOneProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
