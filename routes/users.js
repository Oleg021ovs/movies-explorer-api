const userRouter = require('express').Router();

const {
  getProfile, editProfile,
} = require('../controllers/users');

userRouter.get('/me', getProfile);

userRouter.patch('/me', editProfile);

module.exports = userRouter;
