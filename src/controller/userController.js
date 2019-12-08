const userFactory = require('../factory/userFactory');
const user = require('../model/userSchema');
const book = require('../model/librarySchema');
const response = require('../factory/responseFactory');
const validate = require('../services/validationService');

const userController = {
  async get(req, resp) {
    const data = await user.find({});
    return resp.send(response.createResponse('users finded', data));
  },

  async getById(req, resp) {
    const { id } = req.query;

    try {
      const savedUser = await user.findById(id);

      if (!savedUser) {
        return resp
          .status(400)
          .send(response.createResponse('inexistent user', ''));
      }

      return resp.send(
        response.createResponse('User data', {
          ...savedUser.toObject(),
          senha: ''
        })
      );
    } catch {
      return resp
        .status(400)
        .send(response.createResponse('Erro to get user info', ''));
    }
  },

  async save(req, resp) {
    try {
      const { nome, idade, telefone, email, senha } = req.body.user;

      if (await validate.verifyEmailExist(email, user)) {
        return resp
          .status(409)
          .send(response.createResponse('E-mail already exist', email));
      }

      const newUser = userFactory.createUser(
        nome,
        idade,
        telefone,
        email,
        senha
      );
      const data = await user.create(newUser);
      resp.send(
        response.createResponse('User Created', {
          ...data.toObject(),
          senha: ''
        })
      );
    } catch {
      resp.status(400).send(response.createResponse('Error to create user'));
    }
  },

  async update(req, resp) {
    try {
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
    } catch {
      resp.status(400).send(response.createResponse('Error to update user'));
    }
  },

  async remove(req, resp) {
    try {
      const { _id } = req.body.user;
      const savedUser = await user.findById(_id);

      if (!savedUser) {
        return resp
          .status(400)
          .send(response.createResponse('User not founded', ''));
      }

      await user.remove(savedUser);
      return resp.send(response.createResponse('User deleted', savedUser));
    } catch {
      resp.status(400).send(response.createResponse('Error to delete user'));
    }
  }
};

module.exports = userController;
