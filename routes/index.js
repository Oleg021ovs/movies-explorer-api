const { celebrate, Joi } = require('celebrate');
const { createProfile, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const users = require('./users');
const movies = require('./movies');
const NotFoundError = require('../error/notFoundErr');

module.exports = (app) => {
  app.post('/signin', celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }), login);

  app.post('/signup', celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  }), createProfile);

  app.use('/users', auth, users);
  app.use('/movies', auth, movies);

  app.use((req, res, next) => {
    next(new NotFoundError('404 - Страницы не существует'));
  });
};
