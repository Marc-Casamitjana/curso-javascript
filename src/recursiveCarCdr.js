function car(array) {
    return array[0];
}

function cdr(array) {
    return array.slice(1);
}

function hasElements(array) {
  // return array.length? true: false;
   return array.length > 0;
}

module.exports = {
    cdr, car, hasElements
}