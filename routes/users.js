const userRouter = require('express').Router();

const {
  getProfile, editProfile,
} = require('../controllers/users');
const { editProfileValid } = require('../validation/userValidation');

userRouter.get('/me', getProfile);

userRouter.patch('/me', editProfileValid, editProfile);

module.exports = userRouter;
