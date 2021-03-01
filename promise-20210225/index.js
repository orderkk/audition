
// $.ajax(({
//     url: 'http://localhost:3000/data.json',
//     async: false,
//     success(data) {
//         console.log(getNames(data))
//     }
// }))

// console.log('i am a good boy')

// function getNames(data) {
//     return data.map(item => {
//         return item.name
//     })
// }



// // 同步
// const p = new Promise((resolve, reject) => {
//     $.ajax({
//         url: 'http://localhost:3000/data.json',
//         success(data) {
//            resolve(data)
//         }
//     })
// })

// 异步
// p.then((res) => {
//     console.log(getNames(res))
// })





function getData() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'http://localhost:3000/data.json',
            success(data) {
                resolve(data)
            }
        })
    })
}
doSth()
async function doSth() {
    const data = await getData()
    console.log(getNames(data))

    console.log(' i am a good boy')
}

function getNames(data) {
    return data.map(item => {
        return item.name
    })
}