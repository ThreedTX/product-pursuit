const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Product } = require('../../db/models/');


router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
})
);

module.exports = router;
