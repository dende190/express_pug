const express = require('express');

function coursesRoute(app) {
  const router = express.Router();
  app.use('/cursos', router);

  router.get('/', (req, res, next) => {
    const datosVista = {
      title: 'Cursos',
    }
    res.render('courses/list', datosVista);
  });
}

module.exports = coursesRoute;
