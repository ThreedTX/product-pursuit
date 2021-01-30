const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Product } = require('../../db/models/');
// const { Review } = require('../../db/models/');


router.get('/', asyncHandler(async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
})
);

router.get('/:productId', asyncHandler(async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
})
);

// router.get('/:productId/reviews', asyncHandler(async (req, res) => {
//   // const product = await Product.findByPk(req.params.id);
//   const productId = req.params.id;
//   const reviewsByProductId = async function (productId) {
//     return await Review.findAll({
//       where: {
//         productId,
//       },
//     });
//   }
//   console.log(reviewsByProductId);
//   res.json(reviewsByProductId);
// })
// );

module.exports = router;
