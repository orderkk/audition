/**
 * arr.fill(value[, start[, end]])
 * 描述： 
 */

const array1 = [1, 2, 3, 4];

var arr2 = array1.fill(0, 2, 4)
console.log(arr2)

console.log(Array(3).fill(4))
var arr = Array(3).fill({})
console.log(arr)
arr[0].hi = 'hi'