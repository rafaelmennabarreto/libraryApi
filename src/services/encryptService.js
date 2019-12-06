const bcrypt = require('bcryptjs');
const ROUND = 10;

const encrypt = async password => {
  return await bcrypt.hash(password, ROUND);
};

module.exports = { encrypt };
