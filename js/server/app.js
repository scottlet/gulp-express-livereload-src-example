import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import { engine } from 'express-handlebars';
import favicon from 'serve-favicon';
import logger from 'morgan';
// eslint-disable-next-line import/no-unresolved
import { name as appname, version as appversion } from './package.json';
import path from 'path';
import routesController from './routes/routesController';
import users from './routes/users';
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

//console.log('name', NAME, 'version', VERSION);
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(favicon(path.join(__dirname, '/public/' + appversion + '/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));
// Disable template caching in browser for dev.
if (app.get('env') !== 'production') {
    app.use((req, res, next) => {
        if (req.accepts('html')) {
            res.setHeader('Pragma', 'no-cache');
            res.setHeader(
                'Cache-Control',
                'no-cache, no-store, must-revalidate'
            );
            res.setHeader('Expires', '0');
        }

        return next();
    });
}

app.use('/', routesController);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');

    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') !== 'production') {
    app.use((err, req, res) => {
        res.status(err.status || HTTPCODES.E500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
    res.status(err.status || HTTPCODES.E500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

export { app };
