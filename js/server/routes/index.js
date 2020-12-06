import { printLn } from '../shared/dummy';

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
