const mongoose = require('../database/Db');

const userSchema = mongoose.Schema({
  nome: { type: String, require: true },
  idade: Number,
  telefone: String,
  email: { type: String, require: true, lowercase: true },
  senha: { type: String, require: true, select: false },
  favoritos: [],
  createdAt: { type: Date, default: Date.now }
});

const user = mongoose.model('User', userSchema);

module.exports = user;
