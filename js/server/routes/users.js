/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 */

/**
 *
 * @param {Request} req request
 * @param {Response} res response
 * @param {NextFunction} [next] next
 * @returns {void}
 */
function users(req, res, next) {
  res.send('respond with a resource');
}

export default users;
