const user = require('../model/userSchema');
const validate = require('../services/validationService');

const generateAdmin = async () => {
  const admin = {
    nome: process.env.USER_NAME,
    senha: process.env.USER_PASSWORD,
    email: process.env.USER_EMAIL
  };

  if (await validate.verifyEmailExist(admin.email, user)) {
    console.log('Admin already exist');
    return;
  }
  await user.create(admin);
  console.log('admin created');
};

module.exports = { generateAdmin };
