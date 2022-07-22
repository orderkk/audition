class Vue {
  constructor(options) {
    let { el, data, methods } = options;
    this.el = document.querySelector(el)
    this.data = data()
    this.methods = methods;

    this.showPools = new Map()
    this.eventPools = new Map()

    this.init()
  }

  init() {
    this.initData()
    this.initDom(this.el)

    this.initView(this.showPools) // 开始初始化页面
    this.initEvents(this.eventPools)
  }

  initData() {
    let _this = this;
    for (let key in _this.data) {
      Object.defineProperty(_this, key, {
        get() {
          return _this.data[key]
        },
        set(newValue) {
          _this.data[key] = newValue;
          _this.changeDom(key, _this.showPools)
        }
      })
    }
  }

  initDom(el) {
    const _childNodes = el.childNodes;
    _childNodes.forEach(node => {
      if (node.nodeType === 1) {
        const vIf = node.getAttribute('v-if')
        const vShow = node.getAttribute('v-show')
        const vEvent = node.getAttribute('@click');

        if (vIf) {
          this.showPools.set(node, {
            type: 'if',
            key: vIf,
            value: this.data[vIf]
          })
        }
        if (vShow) {
          this.showPools.set(node, {
            type: 'show',
            key: vShow,
            value: this.data[vShow]
          })
        }
        if (vEvent) {
          this.eventPools.set(node, this.methods[vEvent])
        }
      }
      node.childNodes && this.initDom(node)
    })
  }
  initView(showPools) {
    this.changeDom(null, showPools)
  }
  changeDom(key, showPools) {
    if (!key) {
      for (let [k, v] of showPools) {
        switch (v.type) {
          case 'if':
            v.comment = document.createComment('v-if');
            !v.value && k.parentNode.replaceChild(v.comment, k)
            break;
          case 'show':
            !v.value && (k.style.display = 'none')
            break;
          default:
            break;
        }
      }
    } else {
      for (let [k, v] of showPools) {
        if (v.key === key) {
          switch (v.type) {
            case 'if':
              v.value
                ? k.parentNode.replaceChild(v.comment, k)
                : v.comment.parentNode.replaceChild(k, v.comment)
              v.value = !v.value
              break;
            case 'show':
              !v.value ? k.style.display = 'block' : k.style.display = 'none'
              v.value = !v.value
              break;
            default:
              break;
          }
        }
      }
    }

  }
  initEvents(eventPools) {
    for (let [k, v] of eventPools) {
      k.addEventListener('click', v.bind(this), false)
    }
  }
}