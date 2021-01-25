const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

/* setTokenCookie sets the JWT after a user is logged in or signed up.
It takes in the response and the session user and generates
a JWT using the imported secret. It is set to expire in JWT_EXPIRES_IN
key seconds that was set in the .env file.
The payload of the JWT will be the return of the instance method
.toSafeObject in the User model.
After the JWT is created, it's set to an HTTP-only cookie on the response as a token cookie */
const setTokenCookie = (res, user) => {
  // Create the token.
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn) }, // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};

/* Certain authenticated routes will require the identity of the current session user.
restoreUser(below) restores the session user based on the contents of the JWT cookie.
It verifies and parses the JWT's payload and searches the
  database for a User with the id in the payload (this query uses the currentUser scope
  since the hashedPassword is not needed for this operation).
If there is a User found, then save the user to a key of user onto the request.
If there is an error verifying the JWT or a User cannot be found with the id, then
  clear the token cookie from the response. */
const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) {
      return next();
    }

    try {
      const { id } = jwtPayload.data;
      req.user = await User.scope('currentUser').findByPk(id);
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

/* requireAuth is an Express middleware defined as an array with the restoreUser
  middleware function(above) as the first element in the array.
This will ensure that if a valid JWT cookie exists, the session user will be
  loaded into the req.user attribute.
The second middleware will check req.user and will go to the next middleware if there is a
  session user present there.
If there is no session user, then an error will be created and passed along to
  the error-handling middlewares. */

const requireAuth = [
  restoreUser,
  function (req, res, next) {
    if (req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };
