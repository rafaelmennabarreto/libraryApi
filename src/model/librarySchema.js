const mongoose = require('../database/Db');

const librarySchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  ISBN: { type: Number, required: true },
  categoria: String,
  ano: String
});

const book = mongoose.model('Book', librarySchema);

module.exports = book;
