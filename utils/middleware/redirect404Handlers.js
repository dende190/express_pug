const createError = require('http-errors');

function redirect404(req, res, next) {
  next(createError(404));
}

module.exports = redirect404;
