const express = require('express');
const projectController = require('./projectController');

const router = express.Router();
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.post('/', projectController.create);
module.exports = router;  