const moviesRouter = require('express').Router();

const {
  getFilm, createFilm, deleteFilm,
} = require('../controllers/movies');

moviesRouter.get('/', getFilm);

moviesRouter.post('/', createFilm);

moviesRouter.delete('/:movieId', deleteFilm);

module.exports = moviesRouter;
