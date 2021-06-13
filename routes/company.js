const express = require('express');

function companyRoute(app) {
  const router = express.Router();
  app.use('/empresa', router);

  router.get('/contactanos', (req, res, next) => {
    const datosVista = {
      title: 'Contactanos',
    }
    res.render('company/contact', datosVista);
  });
}

module.exports = companyRoute;
