const { Router } = require('express');
const createUser = Router();
const createUserController = require('../../controllers/Users');

createUser.post('/users', createUserController.CreateUser);

module.exports = createUser;