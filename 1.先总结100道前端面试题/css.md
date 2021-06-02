# 1.面试官： flex布局
    答：
    容器
    display: flex;
    display: -webkit-flex;

    flex-direction: row/ row-reverse/ column/ colunm-reverse;
    flex-wrap: wrap/ nowrap/ wrap-reverse;
    flex-flow: 第一个属性是flex-direction  第二个属性是 flex-wrap；

    justify-content: flex-start/ flex-end/ center/ space-between/ space-around;
    align-items: flex-start/ flex-end/ center/ baseline / stretch;
    项目
    order order属性设置项目排序的位置，默认值为0，数值越小越靠前；
    flex-grow： flex-grow属性用来控制当前项目是否放大显示。默认值为0，表示即使容器有剩余空间也不放大显示。如果设置为1，则平均分摊后放大显示。
    flex-shrink: flex-shrink属性表示元素的缩小比例。默认值为1，如果空间不够用时所有的项目同比缩小。如果一个项目的该属性设置为0，则空间不足时该项目也不缩小。
    flex-basis: 表示表示项目占据主轴空间的值。默认为auto，表示项目当前默认的大小。如果设置为一个固定的值，则该项目在容器中占据固定的大小。
    flex: flex-grow属性、flex-shrink属性、flex-basis属性的简写。默认值为：0 1 auto；
    align-self: 属性表示当前项目可以和其他项目拥有不一样的对齐方式  flex-start | flex-end | center | baseline | stretch
# 2.面试官： grid布局
    答：
# 3.面试官： 常见的行内元素和块级元素都有哪些？
    答： 行内元素 inline
        不能设置宽高，不能自动换行
        span、input、img、textarea、label、select
        块级元素block
        可以设置宽高，会自动换行
        p、h1/h2/h3/h4/h5、div、ul、li、table
        inline-block
        可以设置宽高，会自动换行
# 引申问题，为什么img是行内元素但是可以设置宽高呢
# 4.面试官：请说明px,em,rem,vw,vh,rpx等单位的特性
    答：px 像素 （pc端可以等同于物理像素，移动端则不一定）
        em 相对 父盒子fontsize 的单位；
        rem  相对 html根标签fontsize 的单位；
        rpx: 微信小程序中独有的自适应屏幕大小的相对单位，所有屏宽均为750rpx；
        vh： 1vh 等于视口高度的1%； 100vh是总高度
        vw：1vw 等于视口宽度的1%；  100vw是总宽度
# 5.面试官：常见的替换元素和非替换元素？
    答： 替换元素
        //img标签，只写这一个标签，不添加属性，页面上是显示不出来你要的图片的，但是我们往img标签里面添加src，这时候页面上就能显示出你要的图片，src不同，页面上显示出来的内容也就不同。
        是指若标签的属性可以改变标签的显示方式就是替换元素，比如input的type属性不同会有不同的展现，img的src等
        img、input、iframe
        非替换元素
        div、span、p
# 6.面试官：first-of-type和first-child有什么区别 （暂没理解）
    答：first-child 相当于 :nth-child(1)匹配父元素下的第一个匹配类型的子元素
       first-of-type 和first-child类似，它匹配的是父元素中与正则匹配的且是同种类元素的第一个。