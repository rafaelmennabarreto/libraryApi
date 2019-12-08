const createUser = (nome, idade, telefone, email, senha) => ({
  nome,
  idade,
  telefone,
  email,
  senha,
  favoritos: []
});

const updateUser = (userToUpdate, user2) => {
  userToUpdate.id = gtValueToUpdate(user2.id, userToUpdate.id);
  userToUpdate.nome = gtValueToUpdate(user2.nome, userToUpdate.nome);
  userToUpdate.idade = gtValueToUpdate(user2.idade, userToUpdate.idade);
  userToUpdate.email = gtValueToUpdate(user2.email, userToUpdate.email);
};

const gtValueToUpdate = (field1, field2) => {
  return field1 ? field1 : field2;
};

module.exports = { createUser, updateUser };
