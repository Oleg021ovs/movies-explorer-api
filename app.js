require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { MONGO_DEV, PORT_DEV } = require('./constans/constans');

const { NODE_ENV, PORT_PRODUCTION, MONGO_PRODUCTION } = process.env;

const app = express();

app.use(helmet()); // используем helmet
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger); // подключаем логгер запросов

routes(app); // роуты

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

errorHandler(app); // обработка всех ошибок

mongoose.connect(NODE_ENV !== 'production' ? MONGO_PRODUCTION : MONGO_DEV);

app.listen(NODE_ENV !== 'production' ? PORT_PRODUCTION : PORT_DEV, () => {
  console.log('App started');
});
