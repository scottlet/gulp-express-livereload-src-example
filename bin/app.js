#!/usr/bin/env node
/*eslint-disable no-console*/
/**
 * Module dependencies.
 */

// @ts-ignore
//eslint-disable-next-line
import { app } from '../app.js';
import debugModule from 'debug';
import http from 'http';

const debugRunner = debugModule('gulp-express-handlebars-livereload:server');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

/**
 *
 * @param {string | null} val value
 * @returns {number | string | boolean | null} return
 */
function normalizePort(val) {
  const port = parseInt(val || 'NaN');

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

/**
 * @typedef {import('http-errors').HttpError} HttpError
 */

/**
 *
 * @param {HttpError} error error
 * @returns {void}
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

/**
 * Event listener for HTTP server "listening" event.
 * @returns {void} This function does not return anything.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr?.port;

  debugRunner('Listening on ' + bind);
}

export default server;
