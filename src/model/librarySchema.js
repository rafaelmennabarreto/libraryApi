const mongoose = require('../database/Db');

const librarySchema = new mongoose.Schema({
  titulo: String,
  ISBN: Number,
  categoria: String,
  ano: String
});

module.exports = librarySchema;
