const userRouter = require('express').Router();

const { editProfileValid } = require('../validation/userValidation');

const {
  getProfile, editProfile,
} = require('../controllers/users');

userRouter.get('/me', getProfile);

userRouter.patch('/me', editProfile, editProfileValid);

module.exports = userRouter;
