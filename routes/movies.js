const moviesRouter = require('express').Router();

const {
  getFilm, createFilm, deleteFilm,
} = require('../controllers/movies');

const { createFilmValidation, deleteFilmValidation } = require('../validation/moviesValidation');

moviesRouter.get('/', getFilm);

moviesRouter.post('/', createFilmValidation, createFilm);

moviesRouter.delete('/:movieId', deleteFilmValidation, deleteFilm);

module.exports = moviesRouter;
