const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createProduct,
  deleteProduct,
  findAllProducts,
  findOneProduct,
  updateProduct,
} = require('../controllers/productServices');

router.route('/').get(findAllProducts).post(createProduct);

router
  .route('/:id')
  .get(findOneProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
