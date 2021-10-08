// 指的是将一个接受多个参数的函数， 变为接受一个参数 返回一个函数的固定格式

console.log(add(1)(2)(3)(4))
// add(1)
function add() {
    const _args = [...arguments]
    function fn() {
        _args.push(...arguments)
        console.log(_args)
        return fn
    }
    fn.toString = function() {
        return _args.reduce((sum, cur) => {
            return sum + cur
        })
    }
    return fn
}