const express = require('express');
const routes = express.Router();
const auth = require('./middleware/Auth');

// User Routes
const userController = require('./controller/userController');
routes.get('/user', auth.validateToken, userController.get);
routes.post('/user', userController.save);
routes.put('/user', auth.validateToken, userController.update);
routes.delete('/user', auth.validateToken, userController.remove);
routes.get('/user/search', auth.validateToken, userController.getById);

// BookRoutes
const bookController = require('./controller/bookController');
routes.get('/book', auth.validateToken, bookController.get);
routes.get('/book/favorite', auth.validateToken, bookController.addFavorite);

// Login Routes
const loginController = require('./controller/loginController');
routes.post('/sigin', loginController.sigIn);

module.exports = routes;
