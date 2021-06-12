const express = require('express');

function usersRoute(app) {
  const router = express.Router();
  app.use('/users', router);

  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
}

module.exports = usersRoute;
