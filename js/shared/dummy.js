/*eslint-disable no-console*/
function printLn() {
    console.log('this file is shared between server and clients.');
}
module.exports = {
    printLn: printLn
};
