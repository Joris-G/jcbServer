const express = require('express');
const processController = require('../_controllers/processController');

const router = express.Router();
router.get('/', processController.getAll);
router.get('/:id', processController.getById);
router.post('/', processController.create);
module.exports = router;  