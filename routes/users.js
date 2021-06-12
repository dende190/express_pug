const express = require('express');
const loginService = require('../services/login');

function usersRoute(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (req, res, next) => {
    res.render('users/login', { title: 'Login' });
  });

  router.post('/login', async (req, res, next) => {
    const userLogged = await loginService.authUser(req.body);
    if (!userLogged) {
      res.redirect('/');
    }

    res.redirect('/start');
  });

  router.get('/start', (req, res, next) => {
    res.render('test', { title: 'Login' });
  });
}

module.exports = usersRoute;
