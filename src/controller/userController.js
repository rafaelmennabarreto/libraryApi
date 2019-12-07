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
    const { nome, idade, telefone, email, senha } = req.body.user;

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

  async update(req, resp) {
    const { user: reqUser } = req.body;
    const savedUser = await user.findById(reqUser._id);

    userFactory.updateUser(savedUser, reqUser);

    await savedUser.save();
    return resp.send(
      response.createResponse('User succefull updated', {
        ...savedUser.toObject(),
        senha: ''
      })
    );
  },

  async remove(req, resp) {
    const { _id } = req.body.user;
    const savedUser = await user.findById(_id);

    if (!savedUser) {
      return resp
        .status(400)
        .send(response.createResponse('User not founded', ''));
    }

    await user.remove(savedUser);
    return resp.send(response.createResponse('User deleted', savedUser));
  },

  signIn(req, resp) {}
};

module.exports = userController;
