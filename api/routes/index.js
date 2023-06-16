const express = require('express');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();

  // Home
  router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });

  // API REST
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);

  app.use('/api/v1', router);
}

module.exports = routerApi;
