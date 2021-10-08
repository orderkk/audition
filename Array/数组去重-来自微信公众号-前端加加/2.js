// 交换元素位置从而替换调用splice方法
function fn(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];

        if (obj[item] !== undefined) {
            arr[i] = arr[arr.length - 1];
            arr.length -- ;1
            i--;
            continue;
        }
        obj[item] = item
    }
    return arr;
}