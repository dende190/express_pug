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

function coursesRoute(app) {
  const router = express.Router();
  app.use('/curso-medieval', router);

  router.get('/', (req, res, next) => {
    const datosVista = {
      title: 'Curso medieval',
    }
    res.render('courses/medieval_course', datosVista);
  });
}
module.exports = coursesRoute;
