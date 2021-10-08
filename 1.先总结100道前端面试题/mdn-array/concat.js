var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [7]
var arr4 = arr1.concat(arr2, 7, 8, 9, arr3);
console.log(arr4)

/**
 *
 * 语法：var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
 * 返回值：一个新数组
 * 描述：
 * 注意： 数组/值在连接时保持不变。此外，对于新数组的任何操作（仅当元素不是对象引用时）都不会对原始数组产生影响，反之亦然。
 * 自我总结：连接数组就用它
 */