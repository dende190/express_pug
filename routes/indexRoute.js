var express = require('express');

function indexRoute(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
}

module.exports = indexRoute;
