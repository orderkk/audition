// array.includes

function fn(arr) {
    let newArr = [];

    arr.forEach(item => {
        !newArr.includes(item) ? newArr.push(item) : ''
    })
    return newArr
}