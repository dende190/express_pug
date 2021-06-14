const express = require('express');

function gadeAcademyRoute(app) {
  const router = express.Router();
  app.use('/gade-academy', router);

  router.get('/', (req, res, next) => {
    const datosVista = {
      title: 'Gade Academy',
    }
    res.render('gadeAcademy/gadeAcademy', datosVista);
  });
}

module.exports = gadeAcademyRoute;
