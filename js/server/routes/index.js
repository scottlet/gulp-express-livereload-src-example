import { printLn } from '~/shared/dummy';
/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {import('express').NextFunction} NextFunction
 * @typedef {{ status: number, message: string }} ExtraError
 */

/**
 *
 * @param {Request} req request
 * @param {Response} res  response
 * @param {NextFunction} [next] next
 * @returns {void}
 */
function index(req, res, next) {
  printLn();

  const params = {
    title: 'The Test Page',
    pageTitle: 'Welcome!',
    testableProperty: true,
    helpers: {
      capitalise: text => {
        return text.toUpperCase();
      }
    }
  };

  res.render('index', params);
}

export default index;
