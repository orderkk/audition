// console.log(1)

// var p = new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         resolve('success')
//         console.log(4)
//     })
//     // throw new Error('test')
// })


// p.then((value) => {
//     console.log(value)
// }, (error) => {
//     console.log(error)
// })
// console.log(3)


let p1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
})

p1.then((value) => {
    console.log(2)
    console.log(value)
    return value + '11111 '
}).then((value) => {
    console.log(3)
    console.log(value)
})