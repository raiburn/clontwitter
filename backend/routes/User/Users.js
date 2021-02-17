const { Router } = require('express');
const users = Router();
const usersController = require('../../controllers/Users');

users.get('/users', usersController.UsersAll);

module.exports = users;