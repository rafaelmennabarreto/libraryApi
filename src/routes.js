const express = require('express');
const routes = express.Router();
const auth = require('./middleware/Auth');

// User Routes
const userController = require('./controller/userController');
routes.get('/user', userController.get);
routes.post('/user', userController.save);
routes.put('/user', auth.validateToken, userController.update);
routes.delete('/user', auth.validateToken, userController.remove);
routes.get('/user/search', userController.getById);

// BookRoutes
const bookController = require('./controller/bookController');
routes.get('/book', bookController.get);
routes.post('/book', auth.validateToken, bookController.save);
routes.put('/book', auth.validateToken, bookController.update);
routes.delete('/book', auth.validateToken, bookController.remove);
routes.get('/book/all', bookController.getAll);
routes.post('/book/favorite', auth.validateToken, bookController.addFavorite);

// Login Routes
const loginController = require('./controller/loginController');
routes.post('/sigin', loginController.sigIn);

module.exports = routes;
