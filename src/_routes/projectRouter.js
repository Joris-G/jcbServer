const express = require('express');
const projectController = require('../_controllers/projectController');

const router = express.Router();
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);
router.post('/', projectController.create);
module.exports = router;  