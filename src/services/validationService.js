const verifyEmailExist = async (email, userModel) => {
  const savedUser = await userModel.findOne({ email: email });
  return !!savedUser;
};

module.exports = { verifyEmailExist };
