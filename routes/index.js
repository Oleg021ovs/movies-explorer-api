const { createProfile, login } = require('../controllers/users');
const auth = require('../middlewares/auth');
const users = require('./users');
const movies = require('./movies');
const NotFoundError = require('../error/notFoundErr');

module.exports = (app) => {
  app.post('/signin', login);

  app.post('/signup', createProfile);

  app.use('/users', auth, users);
  app.use('/movies', auth, movies);

  app.use('/', auth, (req, res, next) => {
    next(new NotFoundError('404 - Страницы не существует'));
  });
};
