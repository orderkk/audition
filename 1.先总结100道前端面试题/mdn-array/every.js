const array1 = [1, 30, 39, 29, 10, 13];
const fn = function (a) {
    return a < 40
}
console.log(array1.every(fn))


/**
 * arr.every(callback(element[, index[, array]])[, thisArg])
 */


function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log([12, 5, 8, 130, 44].every(isBigEnough))
console.log([12, 54, 18, 130, 44].every(isBigEnough))