const express = require('express');
const authRouter = require('./src/auth/authRouter');
const userRouter = require('./src/users/userRouter');
const processRouter = require('./src/process/processRouter');
const actionRouter = require('./src/action/actionRouter');
const projectRouter = require('./src/project/projectRouter');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/process', processRouter);
router.use('/action', actionRouter);
router.use('/project', projectRouter);


module.exports = router;