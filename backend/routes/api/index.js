const router = require('express').Router();

/*The main purpose of my Express application
is to be a REST API server. All the API routes will
be served at URL's starting with /api/. */


router.post('/test', function (req, res) {
  res.json({ requestBody: req.body });
});
/*A router is created and an API test route is added
to the router. The API test route is accepting requests
with the URL path of /api/test with the HTTP verb of POST.
It sends a JSON response of whatever is in the body
of the request. */

module.exports = router;
