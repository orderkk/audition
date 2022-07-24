// function require(filePath) {
//   const map = {
//     './foo.js': foojs,
//     './main.js': mainjs
//   }
//   const module = {
//     exports: {}
//   }
//   const fn = map[filePath]

//   fn(require, module, module.exports)
//   return module.exports
// }
// require('./main.js')
// function mainjs(require, module, exports) {
//   let { foo } = require('./foo.js')
//   foo()
//   console.log('main')
// }

// function foojs(require, module, exports) {
//   function foo() {
//     console.log('foo')
//   }
//   module.exports = {
//     foo
//   }
// }

(function (modules) {
  function require(id) {
    const module = {
      exports: {}
    }
    const [fn, mapping] = modules[id]
    function localRequire(filePath) {
      const id = mapping[filePath];
      return require(id)
    }
    fn(localRequire, module, module.exports)
    return module.exports
  }
  // require('./main.js')
  require(1)
})({
  1: [function (require, module, exports) {
    let { foo } = require('./foo.js')
    foo()
    console.log('main')
  }, {
    './foo.js': 2
  }],
  2: [function (require, module, exports) {
    function foo() {
      console.log('foo')
    }
    module.exports = {
      foo
    }
  }, {}]
})