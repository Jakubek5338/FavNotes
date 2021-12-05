const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authControllers');

router.get('/register', AuthController.register);
router.get('/login', AuthController.login);
router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/me', AuthController.token);





module.exports = router;