const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  /* Middleware to check if req.body.email, req.body.username, and
  req.body.password exist -- among other things.*/
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];
/*If at least one of them fails the check, then an error
will be returned as the response. */


/* ----- ----- */
/* GET /api/users */
/* ----- ----- ----- ----- ----- ----- ----- -----  */
router.get('/', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
})
);

/* ----- ----- */
/* GET /api/users/:userId */
/* ----- ----- ----- ----- ----- ----- ----- -----  */
router.get('/:userId', asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
})
);

/* ----- ----- */
/* POST /api/users */
/* ----- ----- ----- ----- ----- ----- ----- -----  */
router.post(
  '',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    /* In the route handler, it calls the signup static method on the User model. */
    const user = await User.signup({ email, username, password });
    /* The signup route expects the body of the request to have a key of username,
    email and password with the password of the user being created. */

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
