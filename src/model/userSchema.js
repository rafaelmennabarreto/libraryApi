const mongoose = require('../database/Db');
const encryptService = require('../services/encryptService');

const userSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  idade: Number,
  telefone: String,
  email: { type: String, require: true, lowercase: true },
  senha: { type: String, require: true },
  favoritos: [],
  createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function(next) {
  this.senha = await encryptService.encrypt(this.senha);
  next();
});

const user = mongoose.model('User', userSchema);

module.exports = user;
