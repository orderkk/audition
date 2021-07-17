// split
// var test = 'abc⌚️'
// const testArr = test.split('')
// console.log(test.length)
// console.log(testArr.length)
// console.log(testArr)

// 展开运算符
// const test = 'abc⌚️'
// const chars = [...test]
// console.log(chars)

//解构赋值
const test = 'abc⌚️'
const [ ...chars ] = test;
console.log(chars)

// Array.from
// const test = 'abc⌚️'
// const chars = Array.from(test)
// console.log(chars)