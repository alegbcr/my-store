const express = require('express');
const path = require('path');
const homeRouter = require('./home.router');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();

  // Servir archivos estáticos
  router.use(express.static(path.join(__dirname, '../public')));

  // API REST
  app.use('/', router);
  router.use('/', homeRouter);

  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
