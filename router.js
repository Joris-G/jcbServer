const express = require('express');
const authRouter = require('./_Routes/authRouter');
const userRouter = require('./_Routes/userRouter');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
module.exports = router;