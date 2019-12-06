const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
  titulo: String,
  ISBN: Number,
  categoria: String,
  ano: String
});

module.exports = librarySchema;
