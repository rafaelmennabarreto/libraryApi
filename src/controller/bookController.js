const book = require('../model/librarySchema');
const user = require('../model/userSchema');
const response = require('../factory/responseFactory');
const bookFactory = require('../factory/bookFactory');
const validate = require('../services/validationService');

const bookController = {
  async get(req, resp) {
    const { idbook } = req.query;

    try {
      const savedBook = await book.findById(idbook);
      return resp.send(
        response.createResponse('Book info', savedBook.toObject())
      );
    } catch {
      return resp
        .status(400)
        .send(response.createResponse('Book deleted or dont exist', ''));
    }
  },

  async getAll(req, resp) {
    try {
      const books = await book.find({});
      const data = books.map(b => b.toObject());

      return resp.send(response.createResponse('All books', data));
    } catch (error) {
      resp
        .status(400)
        .send(response.createResponse('Error to retrieve books data', ''));
    }
  },

  async save(req, resp) {
    try {
      const { titulo, ISBN, categoria, ano } = req.body.book;
      const bookToSave = bookFactory.createBook(titulo, ISBN, categoria, ano);

      if (await validate.verifyBookExist(titulo, ISBN, book)) {
        return resp
          .status(409)
          .send(response.createResponse('Book already exist', ''));
      }

      const savedBook = await book.create(bookToSave);
      resp.send(response.createResponse('Book saved', savedBook.toObject()));
    } catch (error) {
      resp.status(400).send(response.createResponse('Error to save book', ''));
    }
  },

  async update(req, resp) {
    try {
      const { book: reqbook } = req.body;
      const savedBook = await book.findById(reqbook._id);
      bookFactory.updateBook(savedBook, reqbook);
      savedBook.save();
      return resp.send(
        response.createResponse('Book updated', savedBook.toObject())
      );
    } catch (error) {
      return resp
        .status(400)
        .send(response.createResponse('Error to updadate book data', ''));
    }
  },

  async remove(req, resp) {
    try {
      const { _id } = req.body.book;
      const bookToDelete = book.findById(_id);
      await book.remove(bookToDelete);
      resp.send(response.createResponse('Book deleted', _id));
    } catch (error) {
      resp
        .status(400)
        .send(response.createResponse('Error to delete book', ''));
    }
  },

  async addFavorite(req, resp) {
    try {
      const { idbook } = req.query;
      const { iduser } = req.body;

      const savedBook = await book.findById(idbook);
      const savedUser = await user.findById(iduser);

      if (validate.bookAlredyFavorite(savedUser.favoritos, idbook)) {
        return resp
          .status(400)
          .send(response.createResponse('Book Already Favorited', idbook));
      }

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
