// map

function fn(arr) {
    let map = new Map()
    let newArr = []

    for(let i = 0; i < arr.length; i ++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            newArr.push(arr[i])
        }
    }

    return newArr
}