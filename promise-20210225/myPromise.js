const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {

    constructor(func) {
        this.status = PENDING; // 初始状态为pending
        this.promiseResult = null;

        this.onFulfilledCallbacks = [] // 保存成功的回调
        this.onRejectedCallbacks = [] // 保存失败的回调

        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    resolve(value) {
        // console.log('resolve do')
        if (this.status === PENDING) {
            setTimeout(() => {
                this.status = FULFILLED
                this.promiseResult = value

                this.onFulfilledCallbacks.forEach(fn => fn(value))
            })
        }
    }

    reject(reason) {
        console.log('reject do')

        if (this.status === PENDING) {
            setTimeout(() => {

                this.status = REJECTED
                this.promiseResult = reason

                this.onRejectedCallbacks.forEach(fn => fn(reason))
            })
        }
    }

    /**
     * 
     * @param {*} onFulFilled 当状态为成功时
     * @param {*} onRejected 当状态为拒绝时
     */
    then(onFulFilled, onRejected) {

        // 参数校验
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        const promise2 = new MyPromise((resolve, reject) => {
            if (this.status === PENDING) {
                // this.onFulfilledCallbacks.push(onFulFilled)

                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulFilled(this.promiseResult)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                // this.onRejectedCallbacks.push(onRejected)

                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = resolvePromise(promise2, x, resolve, reject)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
            if (this.status === FULFILLED) {

                setTimeout(() => {
                    try {
                        let x = onFulFilled(this.promiseResult)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                })
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.promiseResult)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }

                })
            }
        })

        return promise2
    }
}


function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise'))
    }

    if (x instanceof MyPromise) {
        if (x.status === PENDING) {
            x.then((y) => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        }
        if (x.status === FULFILLED) {
            resolve(x.promiseResult)
        }
        if (x.status === REJECTED) {
            reject(x.promiseResult)
        }
    } else if (x !== null && ((typeof x === 'object') || (typeof x === 'function'))) {
        // 如果 x 为对象或函数
        try {
            var then = x.then;
        } catch (error) {
            return reject(error)
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )


            } catch (error) {

                if (called) return;
                called = true;
                reject(error);

            }
        }
    } else {
        // 如果x不为对象或者函数 以x为参数执行promise
    }
}
// console.log(1)
// let p1 = new MyPromise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         resolve('success')
//         console.log(4)
//     })
// })

// p1.then((value) => {
//     console.log(value)
// }, (error) => {
//     console.log(error)
// })

// p1.then(undefined, (error) => {
//     console.log(error)
// })
// console.log(3)

let p1 = new MyPromise((resolve, reject) => {
    console.log(1)
    resolve('success')
})

p1.then((value) => {
    console.log(2)
    console.log(value)
    return value + '11111 '
}).then((value) => {
    console.log(3)
    console.log(value)
})

// p1.then((value) => {
//     console.log(3)
//     console.log(value)
// })