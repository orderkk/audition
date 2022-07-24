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
require(1)
})({
  
    "1": [function (require, module, exports) {
      "use strict";

var _foo = require("./foo.js");

var _user = require("./user.json");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_user2.default);
(0, _foo.foo)();
console.log('main');
    }, {"./foo.js":2,"./user.json":3}],
    
    "2": [function (require, module, exports) {
      "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

function foo() {
  console.log('foo');
}
    }, {}],
    
    "3": [function (require, module, exports) {
      "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "{\n  \"name\": \"lyq\"\n}";
    }, {}],
    

})