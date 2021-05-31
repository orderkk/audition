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