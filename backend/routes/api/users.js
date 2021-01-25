const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

/* ----- ----- */
/* POST /api/users */
/* ----- ----- ----- ----- ----- ----- ----- -----  */
router.post(
  '',
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    /* In the route handler, it calls the signup static method on the User model. */
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);
    /* If the user is successfully created, it calls setTokenCookie
    and returns a JSON response with the user information. */
    return res.json({
      user,
    });
    /* If the creation of the user is unsuccessful, then a Sequelize Validation
    error will be passed onto the next error-handling middleware. */
  }),
);

module.exports = router;
