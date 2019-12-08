const book = require('../model/librarySchema');

const bookController = {
  async get(req, resp) {
    const { idbook } = req.query;

    try {
      const savedBook = book;
    } catch {}
  },

  save(req, resp) {},

  update(req, resp) {},

  remove(req, resp) {},

  async addFavorite(req, resp) {
    const { idbook } = req.query;
    const { iduser } = req.body;

    try {
      const savedBook = await book.findById(idbook);
      const savedUser = await user.findById(iduser);
      savedUser.favoritos.push(idbook);
      savedUser.save();
      return resp.send(
        response.createResponse('Book added to favorite', {
          ...savedUser.toObject(),
          senha: ''
        })
      );
    } catch {
      return resp
        .status(400)
        .send(response.createResponse('Book dont exist', ''));
    }
  }
};

module.exports = bookController;
