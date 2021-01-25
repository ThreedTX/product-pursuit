const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);
/*All the URL's of the routes in the api router will be prefaced with /api. */




module.exports = router;
