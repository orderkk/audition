const arr = [1, 1, '1', 17, true, false, false, 'true', [1], { name: 123 }, [1], { name: 123 }]

// set
// console.log([...new Set(arr)])
// console.log(Array.from(new Set(arr)))

// 双层循环
function unique1(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len--
                j--
            }
        }
    }
    return arr
}
// console.log(unique1(arr))

// indexof
const unique2 = arr => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique2(arr))

// includes
const unique3 = arr => {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique3(arr))

// filter
const unique4 = arr => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}
console.log(unique4(arr))

// map
const unique5 = arr => {
    const map = new Map()
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], true)
            res.push(arr[i])
        }
    }
    return res
}
console.log(unique5(arr))