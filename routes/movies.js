const moviesRouter = require('express').Router();

const {
  getFilm, createFilm, deleteFilm,
} = require('../controllers/movies');

moviesRouter.get('/me', getFilm);

moviesRouter.post('/me', createFilm);

moviesRouter.delete('/:id', deleteFilm);

module.exports = moviesRouter;
