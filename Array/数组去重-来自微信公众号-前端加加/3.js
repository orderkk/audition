// array,filter 和 array.indexof

/**
 * 
 *  filter 创建一个新数组，新数组中的元素是指定数组中指定条件筛选出来的所有元素；
 */
function fn(arr) {
    let newArr = arr.filter((item, index) => {
        console.log(item + '-' + index + '-' + arr.indexOf(item))
        return arr.indexOf(item) === index
    })
    return newArr;
}