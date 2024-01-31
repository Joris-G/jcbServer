const express = require('express');
const authRouter = require('./_Routes/authRouter');

const router = express.Router();

router.use('/auth', authRouter);

module.exports = router;