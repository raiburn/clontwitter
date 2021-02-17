const { Router } = require('express');
const alterUser = Router();
const alterUserController = require('../../controllers/Users');

alterUser.put('/users/:id', alterUserController.AlterUser);

module.exports = alterUser;