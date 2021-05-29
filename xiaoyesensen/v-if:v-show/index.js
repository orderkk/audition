class MyVue {

    constructor(options) {
        const { el, data, methods } = options

        this.el = document.querySelector(el)
        this.data = data
        this.methods = methods

        this.showPool = new Map()
        this.eventPool = new Map()

        this.init()
    }

    init() {
        this.initData()
        this.initDom(this.el)
        this.initViews(this.showPool)
        this.initEvent(this.eventPool)
    }
    // 1.代理数据和数据劫持
    initData() {
        for (let key in this.data) {
            Object.defineProperty(this, key, {
                get() {
                    return this.data[key]
                },
                set(newValue) {
                    this.data[key] = newValue;
                    this.domChange(key, this.showPool)
                }
            })
        }
    }
    // 2.初始化dom
    initDom(el) {
        const _childNodes = el.childNodes;
        if (!_childNodes.length) {
            return
        }

        _childNodes.forEach(dom => {
            // console.log(dom)
            if (dom.nodeType === 1) {
                const vIf = dom.getAttribute('v-if');
                const vShow = dom.getAttribute('v-show');
                const vEvent = dom.getAttribute('@click');

                if (vIf) {
                    this.showPool.set(dom, {
                        type: 'if',
                        show: this.data[vIf],
                        data: vIf
                    })
                } else if (vShow) {
                    this.showPool.set(dom, {
                        type: 'show',
                        show: this.data[vShow],
                        data: vShow
                    })
                }

                if (vEvent) {
                    this.eventPool.set(dom, this.methods[vEvent])
                }
            }

            this.initDom(dom)
        })
    }
    // 3.初始化视图
    initViews(showPool) {
        this.domChange(null, showPool)
    }
    domChange(data, showPool) {
        // 初始化
        if (!data) {
            for (let [k, v] of showPool) {
                switch (v.type) {
                    case 'if':
                        v.comment = document.createComment(`v-if`);
                        !v.show && k.parentNode.replaceChild(v.comment, k)
                        break;
                    case 'show':
                        !v.show && (k.style.display = 'none')
                        break;
                    default:
                        break;
                }
            }
            return
        } else {
            for (let [k, v] of showPool) {
                if (v.data === data) {
                    switch (v.type) {
                        case 'if':
                            v.show ? k.parentNode.replaceChild(v.comment, k)
                                : v.comment.parentNode.replaceChild(k, v.comment);
                            v.show = !v.show
                            break;
                        case 'show':
                            v.show ? k.style.display = 'none'
                                : k.style.display = 'block'
                            v.show = !v.show
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    // 4.eventPool 事件处理函数的绑定
    initEvent(eventPool) {
        for (let [k, v] of eventPool) {
            k.addEventListener('click', v.bind(this), false)
        }
    }
    // 5. 改变数据的同时，改变dom

}


// export default MyVue

/**
 *  showPool [
 *      [
 *          dom,
 *            {
 *              type: if /show,
 *              show: true/ false,
*              data: 绑定数据
*             }
*      ]
* ]
*  eventPool [
*      [
*          dom,
*          handler
*      ]
*  ]
*/