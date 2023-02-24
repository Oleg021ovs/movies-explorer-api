const mongoose = require('mongoose');
const { linkValidate } = require('../constans/constans');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
    validate: {
      validator(URL) {
        return linkValidate.test(URL);
      },
      message: () => 'Неверный формат ссылки',
    },
  },

  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(URL) {
        return linkValidate.test(URL);
      },
      message: () => 'Неверный формат ссылки',
    },
  },

  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(URL) {
        return linkValidate.test(URL);
      },
      message: () => 'Неверный формат ссылки',
    },
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },

  movieId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },

  nameRU: {
    type: String,
    required: true,
  },

  nameEN: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('movie', movieSchema);