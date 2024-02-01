const express = require('express');
const userController = require('../src/users/userController');

const router = express.Router();

router.get('/', userController.getAll);

module.exports = router;