const express = require('express');
const asyncHandler = require('express-async-handler');
/*The asyncHandler function from express-async-handler
will wrap asynchronous route handlers and custom middlewares. */

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

/* ----- ----- */
/* POST /api/session */
/* ----- ----- ----- ----- ----- ----- ----- -----  */
router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    /*If there is no user returned from the login static method, it creates a
    "Login failed" error and invokes the next error-handling middleware with it.*/
    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);
    /* If there is a user returned from the method, then call setTokenCookie
    and return a JSON response with the user information */
    return res.json({
      user,
    });
  }),
);

module.exports = router;
