const verifyEmailExist = async (email, userModel) => {
  const savedUser = await userModel.findOne({ email: email });
  return !!savedUser;
};

const verifyBookExist = async (titulo, isbn, bookModel) => {
  const savedBook = await bookModel.findOne({ titulo: titulo, ISBN: isbn });
  return !!savedBook;
};

const bookAlredyFavorite = (favoritos, bookId) => {
  return !!favoritos.find(f => f == bookId);
};

module.exports = { verifyEmailExist, verifyBookExist, bookAlredyFavorite };
