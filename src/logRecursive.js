recursive = require('./recursiveCarCdr.js')

const array = [1, 2, 3, 4];

function log(array) {

    if (recursive.hasElements(array)) {
        console.log(recursive.car(array));
        log(recursive.cdr(array));
    }
}


log(array);


