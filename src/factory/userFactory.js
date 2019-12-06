const createUser = (nome, idade, telefone, email, senha) => ({
  nome,
  idade,
  telefone,
  email,
  senha,
  favoritos: []
});

module.exports = { createUser };
