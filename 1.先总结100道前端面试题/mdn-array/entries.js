const array1 = ['a', 'b', 'c'];
const arr2 = array1.entries()
const a = []

// for (let i = 0; i < array1.length + 1; i ++) {
//     var tem = arr2.next();
//     if (tem.done === false) {
//         a.push(tem.value)
//     }
// }
// console.log(a)


for (let [k, v] of arr2) {
    console.log(k, v)
}