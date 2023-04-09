const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const LoginController = require('../controllers/authController');

router.post('/login', LoginController.login);
router.post('/signup', LoginController.signup);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;