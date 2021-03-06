const express = require('express');
const expressSession = require('express-session');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {config} = require('./config/config');
const usersRoute = require('./routes/users');
const companyRoute = require('./routes/company');
const coursesRoute = require('./routes/courses');
const gadeAcademyRoute = require('./routes/gadeAcademy');
const redirect404 = require('./utils/middleware/redirect404Handlers');
const errorHandlers = require('./utils/middleware/errorHandlers');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
  secret: 'prueba',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    expires: new Date(Date.now() + 3600000),
    maxAge: 3600000
  },
}));

//Routes
gadeAcademyRoute(app);
usersRoute(app);
coursesRoute(app);
companyRoute(app);

// catch 404 and forward to error handler
app.use(redirect404);
// error handler
app.use(errorHandlers);

app.listen(config.port, () => {
  console.log('Servidor escuchando en el puerto', config.port);
});
