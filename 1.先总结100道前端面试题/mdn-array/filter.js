/**
 * 
 * filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
 * 语法：var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6)
//  console.log(result)

const numbers = [12, 5, 8, 130, 44]
var filters = numbers.filter(element => element > 10)
console.log(filters)

var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];
var invalidEntries = 0;
function isNumber(obj) {
    return obj !== undefined && typeof (obj) === 'number' && !isNaN(obj)
}

function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

var arrByID = arr.filter(filterByID);
console.log(arrByID)

var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(query) {
    return fruits.filter(el => {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}

console.log(filterItems('ap'));
console.log(filterItems('an'));