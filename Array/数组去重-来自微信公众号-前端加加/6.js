// array.indexOf

function fn(arr) {
    let newArr = [];

    arr.forEach(item => {
        newArr.indexOf(item) === -1 ? newArr.push(item) : ''
    })
    return newArr;
}