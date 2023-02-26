module.exports = (app) => {
  app.use((err, req, res, next) => {
    if (err.statusCode) {
      return res.status(err.statusCode).send({ message: err.message });
    }
    res.status(500).send(err.message);

    return next();
  });
};
