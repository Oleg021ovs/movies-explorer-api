const movies = require('../models/movies');
const BadRequestError = require('../error/badReqErr');
const NotFoundError = require('../error/notFoundErr');
const ForbiddenError = require('../error/ForbiddenErr');

module.exports.getFilm = (req, res, next) => {
  movies.find({})
    .then((films) => {
      res.send(films);
    })
    .catch((err) => next(err));
};
module.exports.createFilm = (req, res, next) => {
  // console.log(req.user._id);
  const {
    country, director, duration, year, description, image, trailerLink, thumbnail, movieId,
    nameRU, nameEN,
  } = req.body;
  movies.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  }).then((films) => films.populate('owner'))
    .then((films) => res.send(films))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      }
      next(err);
    });
};

module.exports.deleteFilm = (req, res, next) => {
  movies.findById(req.params.id)
    .then((films) => {
      if (!films) {
        throw new NotFoundError(`404 - Фильм с указанным _id ${req.params.id} не найден`);
      }
      if (movies.owner.toString() !== req.user._id) {
        throw new ForbiddenError('403 - Вы не можете удалить чужой фильм');
      }
      return movies.remove();
    })
    .then(() => {
      res.send({ message: '200 - фильм успешно удален' });
    })
    .catch(next);
};