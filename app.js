const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {config} = require('./config/config');
const indexRoute = require('./routes/indexRoute');
const usersRoute = require('./routes/usersRoute');
const redirect404 = require('./utils/middleware/redirect404Handlers');
const errorHandlers = require('./utils/middleware/errorHandlers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
//Routes
indexRoute(app);
usersRoute(app);

// catch 404 and forward to error handler
app.use(redirect404);
// error handler
app.use(errorHandlers);

app.listen(config.port, () => {
  console.log('Servidor escuchando en el puerto', config.port);
});
