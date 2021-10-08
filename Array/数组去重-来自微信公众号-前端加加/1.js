// 利用对象的key唯一
function fn(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (obj[item] !== undefined) {
            arr.splice(i, 1)
            i--;
            continue;
        }
        obj[item] = item
    }
    return arr
}