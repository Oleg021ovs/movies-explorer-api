const moviesRouter = require('express').Router();

const { createFilmValidation, deleteFilmValidation } = require('../validation/moviesValidation');

const {
  getFilm, createFilm, deleteFilm,
} = require('../controllers/movies');

moviesRouter.get('/', getFilm);

moviesRouter.post('/', createFilm, createFilmValidation);

moviesRouter.delete('/:movieId', deleteFilm, deleteFilmValidation);

module.exports = moviesRouter;
