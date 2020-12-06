const { name, version } = require('./package.json');

const OPTIONS = {
    BREAKPOINTS: {
        OLD_MOBILE: 320,
        MOBILE: 767,
        SMALL_TABLET: 600,
        TABLET: 979,
        TABLET_LANDSCAPE: 1024,
        SMALL_DESKTOP: 1440
    },
    BREAKPOINT_DEVELOPMENT: 'mobile-first', // one of 'mobile-first' or 'desktop-first'
    // one of 'default', 'advanced' or 'lite'
    CSS_NANO_PRESET: process.env.NODE_ENV === 'production' ? 'advanced' : 'lite',
    NAME: name,
    FULL_NAME: 'Gulp Express Handlebars Example',
    VERSION: version
};

module.exports = OPTIONS;
