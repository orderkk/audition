class Vue {
  constructor(options) {
    let { el, data } = options;
    this.el = document.querySelector(el)
    this._data = data()

    this.domPool = {}

    this.init()
  }

  init() {
    this.initData()
    this.initDom(this.el)
  }

  initData() {
    let _this = this;
    _this.data = {}

    for (let key in _this._data) {
      Object.defineProperty(_this.data, key, {
        get() {
          return _this._data[key]
        },
        set(newValue) {
          _this._data[key] = newValue;
          _this.domPool[key].nodeValue = newValue
        }
      })
    }
  }
  initDom(el) {
    this.bindDom(el)
    this.bindInput(el)
  }
  bindDom(el) {
    let _childNodes = el.childNodes;
    _childNodes.forEach(node => {
      if (node.nodeType === 3) {
        let reg = /\{\{(.*?)\}\}/g;
        let _value = node.nodeValue;
        let _isValid = reg.test(_value);
        if (_isValid) {
          let _name = RegExp.$1.trim();
          node.nodeValue = this._data[_name]
          this.domPool[_name] = node;
        }
      }
      node.childNodes && this.bindDom(node)
    })
  }
  bindInput(el) {
    const _allInputs = el.querySelectorAll('input');
    _allInputs.forEach(input => {
      let vModel = input.getAttribute('v-model');
      if (vModel) {
        input.value = this.data[vModel];
        input.addEventListener('input', this.handleInput.bind(this, input, vModel), false)
      }
    })
  }
  handleInput(dom, key) {
    this.data[key] = dom.value
  }
}