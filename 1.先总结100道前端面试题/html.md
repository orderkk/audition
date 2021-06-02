# 1.面试官：doctype标签和meta标签
    答： <!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。
        告诉浏览器以什么样的文档规范解析文档
        标准模式和兼容模式
        标准模式 ->正常，排版和js运作模式都是以最高标准运行
        兼容模式->非正常

        meta: 头部信息 html语言头部的辅助性标签
        属性	                            值	                描述
        charset( H5  New)	        character_set	        定义文档的字符编码。

        content	                        text	        定义与 http-equiv 或 name 属性相关的元信息。

        http-equiv	                content-type
                                    default-style
                                    refresh	                把 content 属性关联到 HTTP 头部。

        name	                    application-name
                                    author
                                    description
                                    generator
                                    keywords	            把 content 属性关联到一个名称。
# 2.面试官：script标签中defer和async都表示了什么
    答：众所周知script会阻塞页面的加载，如果我们要是引用外部js，假如这个外部js请求很久的话就难免出现空白页问题，好在官方为我们提供了defer和async；
        <script src="d.js" defer></script>
        <script src="e.js" defer></script>
        不会阻止页面解析，并行下载对应的js文件
        下载完之后不会执行
        等所有其他脚本加载完之后，在DOMContentLoaded事件之前执行对应d.js、e.js

        <script src="b.js" async></script>
        <script src="c.js" async></script>
        不会阻止DOM解析，并行下载对应的js文件
        下载完之后立即执行

        补充，DOMContentLoaded事件
        是等HTML文档完全加载完和解析完之后运行的事件
        在load事件之前。
        不用等样式表、图像等完成加载
# 3.面试官：什么是BFC？
    答：
# 4.面试官：如何清除浮动？
    答： clear:both;
        overflow: hidden;
        使用after(推荐)
# 5.面试官：什么是DOM事件流？什么是事件委托
    答：DOM事件流
        分为三个阶段
            捕获阶段
            目标阶段
            冒泡阶段
        在addeventListener()的第三个参数(useCapture)设为true，就会在捕获阶段运行，默认是false冒泡
        事件委托
            利用冒泡原理（子向父一层层穿透），把事件绑定到父元素中，以实现事件委托
# 6.面试官：link标签和import标签的区别
    答：link属于html，而@import属于css
        页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。
        link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。
        link方式样式的权重高于@import的。