const rateLimit = require('../node_modules/express-rate-limit');

module.exports = (app) => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 10000, // Ограничьте каждый IP до 100 запросов на «окно» (здесь за 15 минут)
    standardHeaders: true, // Информация об ограничении скорости возврата в заголовках `RateLimit-*`
    legacyHeaders: false, // Отключите заголовки `X-RateLimit-*`
  });
  // Применить промежуточное ПО ограничения скорости ко всем запросам
  app.use(limiter);
};
