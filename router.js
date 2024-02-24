const express = require('express');
const authRouter = require('./_Routes/authRouter');
const userRouter = require('./_Routes/userRouter');
const processRouter = require('./_Routes/processRouter');
const actionRouter = require('./_Routes/actionRouter');
const projectRouter = require('./_Routes/projectRouter');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/process', processRouter);
router.use('/action', actionRouter);
router.use('/project', projectRouter);
module.exports = router;