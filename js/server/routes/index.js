const dummy = require('../shared/dummy');
module.exports = function index(req, res, next) {
    dummy.printLn();
    let params = {
        title: 'The Test Page',
        pageTitle: 'Welcome!',
        testableProperty: true,
        helpers: {
            capitalise: (text) => {
                return text.toUpperCase();
            }
        }
    };
    res.render('index', params);
};
