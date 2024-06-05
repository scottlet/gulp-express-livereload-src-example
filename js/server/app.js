import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { engine } from 'express-handlebars';
import favicon from 'serve-favicon';
import { HttpError } from 'http-errors';

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { name as appname, version as appversion } from './package.json';
import path from 'path';
import routesController from './routes/routesController';
import users from './routes/users';

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 * @typedef {{ status: number, message: string }} ExtraError
 */

const HTTPCODES = {
  E500: 500
};

const app = express();

app.locals = {
  version: appversion,
  name: appname
};

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'default',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials')
  })
);

app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(
  favicon(path.join(__dirname, '/public/' + appversion + '/images/favicon.ico'))
);
app.use(require('morgan')('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));

// Disable template caching in browser for dev.
if (app.get('env') !== 'production') {
  app.use((req, res, next) => {
    if (req.accepts('html')) {
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Expires', '0');
    }

    return next();
  });
}

app.use('/', routesController);
app.use('/users', users);

/**
 * Handles the case when a requested resource is not found.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {void} Throws an error with a status code of 404.
 */
function notFoundHandler(req, res, next) {
  const err = new HttpError('Not Found');

  err.status = 404;
  next(err);
}

// catch 404 and forward to error handler
app.use(notFoundHandler);

/**
 *
 * @param {HttpError} err Error object
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {void}
 */
function developmentHandler(err, req, res) {
  res.status(err.status || HTTPCODES.E500);
  res.render('error', {
    message: err.message,
    error: err
  });
}

/**
 * @param {HttpError} err Error object
 * @param {Request} req Express Request
 * @param {Response} res Express Response
 * @returns {void}
 */
function productionHandler(err, req, res) {
  res.status(err.status || HTTPCODES.E500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') !== 'production') {
  app.use(developmentHandler);
}

// production error handler
// no stacktraces leaked to user
app.use(productionHandler);

export { app };
