const express = require('express');
const actionController = require('../src/action/actionController');

const router = express.Router();
router.get('/', actionController.getAll);
router.get('/:id', actionController.getById);
router.post('/', actionController.create);
module.exports = router;  