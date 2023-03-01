require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const rateLimit = require('./middlewares/rateLimit');

const { MONGO_DEV, PORT_DEV } = require('./constans/constans');

const app = express();
rateLimit(app); // Базовое промежуточное ПО для ограничения скорости для Express
app.use(helmet()); // используем helmet
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger); // подключаем логгер запросов

routes(app); // роуты

app.use(errorLogger); // подключаем логгер ошибок

app.use(errors());

errorHandler(app); // обработка всех ошибок

mongoose.connect(MONGO_DEV);

app.listen(PORT_DEV, () => {
  console.log('App started');
});
// App
