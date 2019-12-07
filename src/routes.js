const express = require('express');
const routes = express.Router();

// User Routes
const userController = require('./controller/userController');
routes.get('/user', userController.get);
routes.post('/user', userController.save);
routes.put('/user', userController.update);
routes.delete('/user', userController.remove);

// BookRoutes
const bookController = require('./controller/bookController');
routes.get('/book', bookController.get);

module.exports = routes;
