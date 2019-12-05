const bookController = {
  get(req, res) {
    res.send({ data: 'book controller' });
  },

  save(req, resp) {},

  update(req, resp) {},

  remove(req, resp) {},

  signIn(req, resp) {}
};

module.exports = bookController;
