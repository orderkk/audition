class Vue {
  constructor(options) {
    let { el, data } = options;
    
    this.el = document.querySelector(el)
    this._data = data()

    this.init()
  }

  init() {
    this.initData()
    let flag = this.nodeToFragment(this.el, this)
    this.el.appendChild(flag)
  }

  // 数据劫持
  initData() {
    let _this = this;
    _this.data = {}
    let dep = new Dep()
    for (let key in _this._data) {
      Object.defineProperty(_this.data, key, {
        get() {
          if (Dep.target) {
            dep.addSub(Dep.target)
          }
          return _this._data[key]
        },
        set(newValue) {
          _this._data[key] = newValue;
          dep.notify()
        }
      })
    }
  }
  nodeToFragment(node, vm) {

    let flag = document.createDocumentFragment();
    let child;

    while (child = node.firstChild) {
      this.compare(child, vm)
      flag.appendChild(child)
    }
    return flag
  }

  compare(node, vm) {
    if (node.nodeType === 1) {
      // input
      let _vModel = node.getAttribute('v-model');
      if (_vModel) {
        node.value = vm.data[_vModel] // 初始化
        node.addEventListener('input', (e) => {
          vm.data[_vModel] = e.target.value
        }, false)
      }
    }
    let reg = /\{\{(.*?)\}\}/g;
    if (node.nodeType === 3) {
      // text
      if (reg.test(node.nodeValue)) {
        let _value = RegExp.$1.trim()
        node.nodeValue = vm.data[_value];

        new Watcher(vm, node, _value, 'text')
      }
    }
  }
} 

function Watcher (vm, node, name, type) {
  
  Dep.target = this
  this.vm = vm;
  this.node = node;
  this.name = name;
  this.type = type;
  this.update()
  Dep.target = null
}

Watcher.prototype = {
  update() {
    if (this.type === 'text') {
      this.node.nodeValue = this.vm.data[this.name]
    }
  }
}

function Dep() {
  this.subs = []
}

Dep.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  notify() {
    this.subs.forEach(item => {
      item.update()
    })
  }
}