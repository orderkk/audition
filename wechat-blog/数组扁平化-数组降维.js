// 数组扁平化
// flat()
var arr = [1, [2, 3,], 4, [5, [6, 7]]];
console.log(arr.flat(Infinity))

// reg
console.log(JSON.stringify(arr).replace(/\[|\]/g, '').split(','))

// 正则改良版本
let tmp = '[' + JSON.stringify(arr).replace(/\[|\]/g, '').split(',') + ']'
const res = JSON.parse(tmp)
console.log(res)

// reduce
const flatten = arr => {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}
console.log(flatten(arr))

// 函数递归
const res5 = []
const fn = arr => {
    for (let i = 0; i < arr.length; i ++) {
        if (Array.isArray(arr[i])) {
            fn(arr[i])
        } else {
            res5.push(arr[i])
        }
    }
}
fn(arr)
console.log(res5)