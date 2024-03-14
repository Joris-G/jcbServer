const express = require('express');
const authController = require('../_controllers/authController');

const router = express.Router();

router.post('/login', authController.login);

module.exports = router;