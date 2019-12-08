const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
const response = require('../factory/responseFactory');
const TOKEN_TYPE = process.env.TOKEN_TYPE;

const validateToken = (req, resp, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return resp
      .status(401)
      .send(response.createResponse('User not logged', ''));
  }

  if (!token.match(TOKEN_TYPE)) {
    return resp.status(401).send(response.createResponse('Invalid token', ''));
  }

  const tokenHash = token.split(' ')[1];
  jwt.verify(tokenHash, secret, (err, decode) => {
    if (err) {
      return resp
        .status(401)
        .send(response.createResponse('Invalid token', ''));
    }

    next();
  });
};

module.exports = { validateToken };
