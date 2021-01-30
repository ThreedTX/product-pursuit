const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models/');


router.get('/', asyncHandler(async (req, res) => {
  const reviews = await Review.findAll();
  res.json(reviews);
})
);


module.exports = router;
