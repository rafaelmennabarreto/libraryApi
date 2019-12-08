const bcrypt = require('bcryptjs');
const ROUND = parseInt(process.env.ROUND);

const encrypt = async password => {
  return await bcrypt.hash(password, ROUND);
};

const verify = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { encrypt, verify };
