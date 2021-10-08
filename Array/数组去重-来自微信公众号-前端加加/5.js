// array.reduce + array.includes

function fn(arr) {
    let newArr = arr.reduce((accu, cur) => {

        return accu.includes(cur) ? accu : accu.concat(cur)
    }, [])

    return newArr
}