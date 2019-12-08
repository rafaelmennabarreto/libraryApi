const user = require('../model/userSchema');
const tokenService = require('../services/tokenService');
const response = require('../factory/responseFactory');
const encryptService = require('../services/encryptService');

const loginController = {
  async sigIn(req, resp) {
    const { email, password } = req.body;
    const savedUser = await user.findOne({ email: email });
    const validPassword = savedUser
      ? await encryptService.verify(password, savedUser.senha)
      : false;

    if (!savedUser || !validPassword) {
      return resp
        .status(401)
        .send(response.createResponse('Invalid e-mail or password', ''));
    }

    const token = tokenService.generateToken(savedUser.nome);
    return resp.send(response.createBearerTokenResponse('User logged', token));
  }
};

module.exports = loginController;
