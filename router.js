const express = require('express');
const authRouter = require('./src/_routes/authRouter');
const userRouter = require('./src/_routes/userRouter');
const processRouter = require('./src/_routes/processRouter');
const actionRouter = require('./src/_routes/actionRouter');
const projectRouter = require('./src/_routes/projectRouter');
const authMiddleware = require('./src/_middlewares/authMiddleware');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/process', processRouter);
router.use('/action', actionRouter);
router.use('/project', authMiddleware, projectRouter);


module.exports = router;