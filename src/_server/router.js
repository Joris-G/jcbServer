const express = require('express');
const authRouter = require('../auth/authRouter');
const userRouter = require('../users/userRouter');
const processRouter = require('../process/processRouter');
const actionRouter = require('../action/actionRouter');
const projectRouter = require('../project/projectRouter');
const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/process', processRouter);
router.use('/action', actionRouter);
router.use('/project', projectRouter);
module.exports = router;