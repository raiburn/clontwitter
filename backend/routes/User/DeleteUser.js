const { Router } = require('express');
const deleteUser = Router();
const deleteUserController = require('../../controllers/Users');

deleteUser.delete('/users/:id', deleteUserController.DeleteUser);

module.exports = deleteUser;