const userFactory = require('../factory/userFactory');
const user = require('../model/userSchema');
const response = require('../factory/responseFactory');
const validate = require('../services/validationService');

const userController = {
  async get(req, res) {
    const data = await user.find({});
    res.send(response.createResponse('users finded', data));
  },

  async save(req, resp) {
    const { nome, idade, telefone, email, senha } = req.body;

    if (await validate.verifyEmailExist(email, user)) {
      return resp
        .status(409)
        .send(response.createResponse('E-mail already exist', email));
    }

    const newUser = userFactory.createUser(nome, idade, telefone, email, senha);
    const data = await user.create(newUser);
    resp.send(
      response.createResponse('User Created', { ...data.toObject(), senha: '' })
    );
  },

  update(req, resp) {},

  remove(req, resp) {},

  signIn(req, resp) {}
};

module.exports = userController;
