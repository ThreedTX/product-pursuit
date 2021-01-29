const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Product } = require('../../db/models/');


router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
})
);

router.get('/:productId', asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id);;
  res.json(product);
})
);

module.exports = router;
