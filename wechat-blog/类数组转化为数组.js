const divs = document.querySelectorAll('div')
console.log(divs)

// Array.from
console.log(Array.from(divs))

// Array.prototype.slice.call
console.log(Array.prototype.slice.call(divs))

// 扩展运算符
console.log([...divs])

// concat
console.log(Array.prototype.concat.apply([], divs))