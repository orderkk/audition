### 地址：https://blog.csdn.net/qq_33277654/article/details/112758362?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162227533516780264063679%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162227533516780264063679&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-112758362.first_rank_v2_pc_rank_v29&utm_term=%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98&spm=1018.2226.3001.4187

## 标题 为三本的我就是凭借这些前端面试题拿到百度京东offer的，前端面试题2021及答案

js 
数据类型
# 1.面试官：JavaScript中什么是基本数据类型什么是引用数据类型？以及各个数据类型是如何存储的？
  答：基本数据类型有:Number String Boolean Undefined Null Symbol bigInt
     引用数据类型：Object (Array, Date, Function, RegExp)

     // 基本数据类型的数据直接存储在栈中；而引用数据类型的数据存储在堆中，在栈中保存数据的引用地址，这个引用地址指向的是对应的数据，以便快速查找到堆内存中的对象。
     // 顺便提一句，栈内存是自动分配内存的。而堆内存是动态分配内存的，不会自动释放。所以每次使用完对象的时候都要把它设置为null，从而减少无用内存的消耗
     // 栈 简单数据段 
     // 堆 指针

类型转换
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
    答：