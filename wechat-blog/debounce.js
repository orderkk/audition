const input = document.getElementById('input')
// input.addEventListener('input', fn, false)
// input.addEventListener('input', debounce(fn, 1000), false)
input.addEventListener('input', throttle(fn, 1000), false)


function fn(e) {
    console.log(e.target.value)
}


function debounce(fn, delay) {
    var timer = null
    return function () {
        const context = this
        const args = arguments

        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay);
    }
}


// function throttle(fn, delay) {
//     let start = Date.now()

//     return function () {
//         const context = this
//         const args = arguments

//         let curTime = Date.now()

//         if (curTime - start >= delay) {
//             fn.apply(context, args)
//             start = curTime
//         }
//     }
// }


function throttle(fn, delay) {
    let timer = null

    return function () {
        const context = this
        const args = arguments


        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, delay);
        }
    }
}