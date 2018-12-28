'use strict';

const {name, version} = require('./package.json');

const OPTIONS = {
    NAME: name,
    FULL_NAME: 'Gulp Express Handlebars Src Example',
    VERSION: version,
    BREAKPOINTS: {
        OLD_MOBILE: 320,
        MOBILE: 767,
        SMALL_TABLET: 600,
        TABLET: 979,
        SMALL_DESKTOP: 1440
    }
};

module.exports = OPTIONS;
