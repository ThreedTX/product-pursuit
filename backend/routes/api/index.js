const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

/*The main purpose of my Express application
is to be a REST API server. All the API routes will
be served at URL's starting with /api/. */


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

// router.use('/products', productsRouter);


module.exports = router;
