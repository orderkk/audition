/**
 * 描述：copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
 * 语法： arr.copyWithin(target[, start[, end]])
 */

const arr1 = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = arr1.copyWithin(0, 3, 4)
// console.log(arr1)
// console.log(arr2)

const arr3 = arr1.copyWithin(1, 3)
console.log(arr3)