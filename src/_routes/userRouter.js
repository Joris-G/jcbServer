const express = require('express');
const userController = require('../_controllers/userController');

const router = express.Router();

router.get('/', userController.getAll);
router.post('/', userController.create);
module.exports = router;