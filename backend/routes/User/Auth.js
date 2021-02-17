const { Router } = require('express');
const auth = Router();
const authController = require('../../controllers/Users');

auth.post('/login', authController.Login);

module.exports = auth;