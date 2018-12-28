/*eslint-disable no-console*/

'use strict';

function printLn() {
    console.log('this file is shared between server and client');
}

module.exports = {
    printLn: printLn
};
