const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

const generateToken = payload => {
  const token = jwt.sign(payload, secret);
  return token;
};
module.exports = { generateToken };
