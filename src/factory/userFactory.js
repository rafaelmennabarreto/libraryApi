const createUser = (nome, idade, telefone, email, senha) => ({
  nome,
  idade,
  telefone,
  email,
  senha,
  favoritos: []
});

const updateUser = (userToUpdate, user2) => {
  userToUpdate.id = copyField(user2.id, userToUpdate.id);
  userToUpdate.nome = copyField(user2.nome, userToUpdate.nome);
  userToUpdate.idade = copyField(user2.idade, userToUpdate.idade);
  userToUpdate.email = copyField(user2.email, userToUpdate.email);
};

const copyField = (field1, field2) => {
  return field1 ? field1 : field2;
};

module.exports = { createUser, updateUser };
