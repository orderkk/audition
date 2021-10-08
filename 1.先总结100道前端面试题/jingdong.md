 ### 数据类型
# 1.面试官：JavaScript中什么是基本数据类型什么是引用数据类型？以及各个数据类型是如何存储的？
  答：基本数据类型有:Number String Boolean Undefined Null Symbol bigInt
     引用数据类型：Object (Array, Date, Function, RegExp)

     // 基本数据类型的数据直接存储在栈中；而引用数据类型的数据存储在堆中，在栈中保存数据的引用地址，这个引用地址指向的是对应的数据，以便快速查找到堆内存中的对象。
     // 顺便提一句，栈内存是自动分配内存的。而堆内存是动态分配内存的，不会自动释放。所以每次使用完对象的时候都要把它设置为null，从而减少无用内存的消耗
     // 栈 简单数据段 
     // 堆 指针

### 类型转换
# 2.面试官：在JS中为什么0.2+0.1 ！=0.3?
  答：因为在JS中，浮点数是使用64位固定长度来表示的，其中的1位表示符号位，11位用来表示指数位，剩下的52位尾数位，由于只有52位表示尾数位。

    // 0.1 和 0.2 都转化成二进制后再进行运算
    0.00011001100110011001100110011001100110011001100110011010 +
    0.0011001100110011001100110011001100110011001100110011010 =
    0.0100110011001100110011001100110011001100110011001100111
    // 转成十进制正好是 0.30000000000000004
# 3.面试官： 那为什么0.2+0.3=0.5呢?
  答：
    // 0.2 和 0.3 都转化为二进制后再进行计算
    0.001100110011001100110011001100110011001100110011001101 +
    0.0100110011001100110011001100110011001100110011001101 = 
    0.10000000000000000000000000000000000000000000000000001 //尾数为大于52位

    // 而实际取值只取52位尾数位，就变成了
    0.1000000000000000000000000000000000000000000000000000   //0.5
# 4.面试官： 那既然0.1不是0.1了，为什么在console.log(0.1)的时候还是0.1呢?
    答：在console.log的时候会二进制转换为十进制，十进制再会转为字符串的形式，在转换的过程中发生了取近似值，所以打印出来的是一个近似值的字符串
# 5.面试官： 判断数据类型有几种方法
    答：typeof 
       instanceof
       constructor
       Object.prototype.toString.call()

       // -----------------------------------------typeof
       // 缺点：typeof null的值为Object，无法分辨是null还是Object

        typeof undefined // 'undefined' 
        typeof '10' // 'String' 
        typeof 10 // 'Number' 
        typeof false // 'Boolean' 
        typeof Symbol() // 'Symbol' 
        typeof Function // ‘function' 
        typeof null // ‘Object’ 
        typeof [] // 'Object' 
        typeof {} // 'Object'

        // -----------------------------------------instanceof
        // 缺点：只能判断对象是否存在于目标对象的原型链上

        function Foo() { }
        var f1 = new Foo();
        var d = new Number(1)


        console.log(f1 instanceof Foo);// true
        console.log(d instanceof Number); //true
        console.log(123 instanceof Number); //false   -->不能判断字面量的基本数据类型

        // -----------------------------------------constructor
        var d = new Number(1)
        var e = 1
        function fn() {
            console.log("ming");
        }
        var date = new Date();
        var arr = [1, 2, 3];
        var reg = /[hbc]at/gi;

        console.log(d.constructor);//ƒ Number() { [native code] }
        console.log(e.constructor.name);//Number
        console.log(fn.constructor.name) // Function
        console.log(date.constructor.name)// Date
        console.log(arr.constructor.name) // Array
        console.log(reg.constructor.name) // RegExp

        //-----------------------------------------Object.prototype.toString.call()
        console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]" 
        console.log(Object.prototype.toString.call(null)); // "[object Null]" 
        console.log(Object.prototype.toString.call(123)); // "[object Number]" 
        console.log(Object.prototype.toString.call("abc")); // "[object String]" 
        console.log(Object.prototype.toString.call(true)); // "[object Boolean]" 


        function fn() {
            console.log("ming");
        }
        var date = new Date();
        var arr = [1, 2, 3];
        var reg = /[hbc]at/gi;
        console.log(Object.prototype.toString.call(fn));// "[object Function]" 
        console.log(Object.prototype.toString.call(date));// "[object Date]" 
        console.log(Object.prototype.toString.call(arr)); // "[object Array]"
        console.log(Object.prototype.toString.call(reg));// "[object RegExp]"
# 6.面试官：intanceof 原理
  答：instanceof原理实际上就是查找目标对象的原型链

   /**
    * 
    * @param {*} L instanceof 左边参数
    * @param {*} R instanceof 右边参数
    */

    function myInstanceof(L, R) {
        var RP = R.prototype
        var LP = L.__proto__

        while (true) {
            if (LP === null) {
                return false
            }
            if (LP === RP) {
                return true
            }
            LP = LP.__proto__
        }
    }

# 7.面试官：为什么typeof null是Object
    答：因为在JavaScript中，不同的对象都是使用二进制存储的，如果二进制前三位都是0的话，系统会判断为是Object类型，而null的二进制全是0，自然也就判断为Object

        这个bug是初版本的JavaScript中留下的，扩展一下其他五种标识位：

        000 对象
        1 整型
        010 双精度类型
        100字符串
        110布尔类型

# 8.面试官：==和===有什么区别
   答： ===是严格意义上的相等，会比较两边的数据类型和值大小
       ==是非严格意义上的相等，

        两边类型相同，比较大小
        两边类型不同，根据下方表格，再进一步进行比较。

        Null == Undefined ->true
        String == Number ->先将String转为Number，在比较大小
        Boolean == Number ->现将Boolean转为Number，在进行比较
        Object == String，Number，Symbol -> Object 转化为原始类型

# 9.面试官：手写call、apply、bind
   答：  call和apply实现思路主要是：
        判断是否是函数调用，若非函数调用抛异常
        通过新对象（context）来调用函数
        给context创建一个fn设置为需要调用的函数
        结束调用完之后删除fn
        bind实现思路
        判断是否是函数调用，若非函数调用抛异常
        返回函数
        判断函数的调用方式，是否是被new出来的
        new出来的话返回空对象，但是实例的__proto__指向_this的prototype
        完成函数柯里化
        Array.prototype.slice.call()

# 10.面试官：字面量创建对象和new创建对象有什么区别，new内部都实现了什么，手写一个new
    答： 字面量：
            字面量创建对象更简单，方便阅读
            不需要作用域解析，速度更快
        new:
            创建一个新的对象
            新对象的__proto__ 指向原函数的prototype
# 11.面试官：字面量new出来的对象和 Object.create(null)创建出来的对象有什么区别
    答：字面量和new创建出来的对象  {} instanceof Object --- true | new Object() instanceof Object --- true
        他们的__proto__ 始终会指向 Object.prototype

        Object.create(null)创建出来的对象原型为null，作为原型链的顶端，自然也没有继承Object的方法和属性
# 12.面试官：什么是作用域，什么是作用域链？
    答：规定变量和函数的可使用范围称作作用域
        每个函数都有一个作用域链，查找变量或者函数时，需要从局部作用域到全局作用域依次查找，这些作用域的集合称作作用域链。
# 13.面试官：什么是执行栈，什么是执行上下文？
    答：全局执行上下文
            创建一个全局的window对象，并规定this指向window，执行js的时候就压入栈底，关闭浏览器的时候才弹出
        函数执行上下文
            每次函数调用时，都会新创建一个函数执行上下文
            执行上下文分为创建阶段和执行阶段
            创建阶段：函数环境会创建变量对象：arguments对象（并赋值）、函数声明（并赋值）、变量声明（不赋值），函数表达式声明（不赋值）；会确定this指向；会确定作用域
            执行阶段：变量赋值、函数表达式赋值，使变量对象编程活跃对象
        eval执行上下文
# 14.面试官：什么是闭包？闭包的作用？闭包的应用？
    答：
# 15.面试官：防抖
    答：设定一个时间让某个高频事件最后一次执行完以后再经过的设定时间结束后 执行一次
    function debounce(fn, delay) {
        let timer = null
        return function () {
            let context = this
            let args = arguments
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(context, args)
            }, delay)
        }
    }
# 16.面试官：节流
    答：时间戳 设定一个时间戳，当执行时间-开始时间大于设定时间戳的时候，执行fn，
    function throttle(fn, delay) {
        var start = Date.now()
        return function() {
            let context = this
            let args = arguments
            let newTime = Date.now()

            if (newTime - start >= delay) {
                fn.apply(context, args)
                start = Date.now()
            }
        }
    }
    定时器 感觉意思也差不多
    function throttle(fn, delay) {
        var timer = null
        return function () {
            let context = this
            let args = arguments
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(context, args)
                    timer = null
                }, delay)
            }
        }
    }
# 17.面试官：什么是原型？什么是原型链？如何理解
    答：
# 18.面试官：什么是内存泄漏
    答： 内存泄露是指不再用的内存没有被及时释放出来，导致该段内存无法被使用就是内存泄漏
# 19.面试官：为什么会导致的内存泄漏
    答：内存泄漏指我们无法在通过js访问某个对象，而垃圾回收机制却认为该对象还在被引用，因此垃圾回收机制不会释放该对象，导致该块内存永远无法释放，积少成多，系统会越来越卡以至于崩溃
# 20.面试官：垃圾回收机制都有哪些策略？
    答：
# 21 面试官：浅拷贝
    答：
    var obj1 = {
        a: {
            a1: { a2: 1 },
            a10: { a11: 123, a111: { a1111: 123123 } }
        },
        b: 123,
        c: "123",
        d: undefined,
        e: [1, 2, 3, {a: 123}]
    }

    function shallowClone1(o) {
        let obj = {}
        for (let k in o) {
            obj[k] = o[k]
        }
        return obj
    }

    var obj2 = { ...obj1 }

    function shallowObj3(o) {
        return Object.assign({}, o)
    }
# 22.面试官：深拷贝
    答：
    // 简易版
    function simpleDeepClone(o) {
        let obj = {}
        for (let key in o) {
            if (typeof o[key] === 'object') {
                obj[key] = simpleDeepClone(o[key])
            } else {
                obj[key] = o[key]
            }
        }
        return obj
    }
    // 另一个简易版
    function deepClone(o) {
        // 判读是否是对象
        if (Object.prototype.toString.call(o) === '[object Object]') {
            let obj = {}
            for (let i in o) {
                if (o.hasOwnProperty(i)) {
                    if (typeof o[i] === 'object') {
                        obj[i] = deepClone(o[i])
                    } else {
                        obj[i] = o[i]
                    }
                }
            }
            return obj
        } else {
            return o
        }
    }
# 23.面试官：为什么JS是单线程的？
    答：
# 24.面试官：Generator是怎么样使用的以及各个阶段的变化如何？
    答：
# 25.面试官：js同异步问题
    答：
