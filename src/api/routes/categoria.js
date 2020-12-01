const express = require('express');
const router = express.Router({ mergeParams: true });

const {
  createCategoria, deleteCategoria, findAllCategorias, findOneCategoria, updateCategoria
} = require('../../api/controllers/categoriaServices');



router.route('/').get(findAllCategorias).post(createCategoria);

router
  .route('/:categoriaId')
  .get(findOneCategoria)
  .put(updateCategoria)
  .delete(deleteCategoria);

module.exports = router;
