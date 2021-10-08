class Vue {
    constructor(el, data) {
        this.el = document.getElementById(el);
        this._data = data

        this.domPool = {}
        this.init()
    }

    init() {
        this.initData()
        this.initDom()
    }

    initData() {
        for (let key in this._data) {
            Object.defineProperty(this.data, key, {
                get() {
                    console.log('i do ')
                    return this._data[key]
                },
                set(newValue) {
                    console.log(newValue)
                    
                    this.domPool[key].innerHTML = newValue

                    this._data[key] = newValue
                }
            })
        }
    }

    initDom() {
        this.bindDom(this.el)
        this.bindInput(this.el)

    }

    bindDom(el) {
        const childNodes = el.childNodes

        childNodes.forEach(child => {
            if (child.nodeType === 3) {
                const value = child.nodeValue

                if (value.trim().length) {
                    let isVaild = /\{\{(.+?)\}\}/.test(value)

                    if (isVaild) {
                        const _key = value.match(/\{\{(.+?)\}\}/)[1].trim()
                        
                        this.domPool[_key] = child.parentNode
                        child.parentNode.innerText = this.data[_key] || undefined
                    }
                }
            }

            child.childNodes && this.bindDom(child)
        })
    }
    bindInput(el) {
        const _allInputs = el.querySelectorAll('input')
        _allInputs.forEach(input => {

            const _vModel = input.getAttribute('v-model')
            if (_vModel) {
                input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false)
            }
        })
    }

    handleInput(key, input) {
        const value = input.value
        this.data[key] = value
    }
}