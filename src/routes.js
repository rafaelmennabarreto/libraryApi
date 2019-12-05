const express = require('express');
const routes = express.Router();

const userController = require('./controller/userController');
const bookController = require('./controller/bookController');

// User Routes
routes.get('/user', userController.get);

// BookRoutes
routes.get('/book', bookController.get);

module.exports = routes;
