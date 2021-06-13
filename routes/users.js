const express = require('express');
const loginService = require('../services/login');

function usersRoute(app) {
  const router = express.Router();
  app.use('/', router);

  router.get('/', (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect('/iniciar-sesion');
    }
    res.render('test', { title: 'Login' });
  });

  router.get('/iniciar-sesion', (req, res, next) => {
    if (req.session.userId) {
      return res.redirect('/');
    }

    const datosVista = {
      title: 'Iniciar Sesion',
    }
    res.render('users/login', datosVista);
  });

  router.post('/iniciar-sesion', async (req, res, next) => {
    const userId = await loginService.authUser(req.body);
    if (!userId) {
      return res.redirect('/iniciar-sesion');
    }

    req.session.userId = userId;
    res.redirect('/');
  });

  router.get('/cerrar-sesion', (req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }

      res.redirect('/iniciar-sesion');
    });
  });
}

module.exports = usersRoute;
