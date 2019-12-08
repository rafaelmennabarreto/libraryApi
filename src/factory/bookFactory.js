const createBook = (titulo, ISBN, categoria, ano) => ({
  titulo,
  ISBN,
  categoria,
  ano
});

const updateBook = (bookToUpdate, book) => {
  bookToUpdate.titulo = gtValueToUpdate(book.titulo, bookToUpdate.titulo);
  bookToUpdate.ISBN = gtValueToUpdate(book.ISBN, bookToUpdate.ISBN);
  bookToUpdate.categoria = gtValueToUpdate(
    book.categoria,
    bookToUpdate.categoria
  );
  bookToUpdate.ano = gtValueToUpdate(book.ano, bookToUpdate.ano);
};

const gtValueToUpdate = (field1, field2) => {
  return field1 ? field1 : field2;
};

module.exports = { createBook, updateBook };
