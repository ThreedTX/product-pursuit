const express = require('express');
const router = express.Router();

router.get('/hello/world', function (req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});
/*In this test route, I'm setting a cookie on
 the response with the name of XSRF-TOKEN to the
 value of the req.csrfToken method's return.
 Then, I'm sending the text, Hello World!
 as the response's body. */


module.exports = router;
