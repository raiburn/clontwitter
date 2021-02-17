const { Router } = require('express');
const findUser = Router();
const findUserController = require('../../controllers/Users');

findUser.get('/users/:username', findUserController.FindUser);

module.exports = findUser;