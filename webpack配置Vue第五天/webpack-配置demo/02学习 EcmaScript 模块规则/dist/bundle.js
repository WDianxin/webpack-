/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foo__ = __webpack_require__(1);
// 参考文档：http://es6.ruanyifeng.com/#docs/module

// const foo = require('./foo')

// import foo from './foo'

// foo()

// 加载文件可以省略后缀名
//    它的规则就是 .js .node .json
// const foo = require('./foo')
// console.log(foo.a)

// 这种方式默认只加载 export default 导出的成员

console.log(__WEBPACK_IMPORTED_MODULE_0__foo__["default"])

// 如果想要加载非 default 的成员，必须通过解构赋值的方式
// 在模块加载的解构赋值中，可以通过 as 起别名


console.log(__WEBPACK_IMPORTED_MODULE_0__foo__["a"])

// 上面的方式加载非 default 导出的成员比较麻烦，如果导出成员比较多的情况下
// 这里可以一次性加载所有 export 导出的成员


console.log(__WEBPACK_IMPORTED_MODULE_0__foo__)

// 加载的方式：
//  import 变量名称 from '模块路径'  按需只加载 export default 的成员
//  import { 模块导出接口成员名, 模块导出接口成员名 as 别名 } from '模块路径' 按需加载非 default 的成员
//  import * as 别名 from '模块路径' 一次性加载所有，export default 会提供一个 default 成员，其他都是键名对应值

// 导出的方式：
// export
//  注意：export 必须有模块内部变量的引用
// export default 只能有一次，否则报错

// 三种导出的方式：
//  export let|var|const|function 成员名 = 值 支持解构赋值的方式按需加载
//  export { 内部成员名 [,内部成员名] } 一次性统一导出内部成员
//  export { 内部成员名 [,内部成员名] } 不会覆盖任何其他成员
//  export default 任意成员（有名无名都行），只能出现一次


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foo", function() { return foo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
// module.exports = function () {
//   console.log('hello')
// }

// export default function () {
//   console.log('hello')
// }

// 有两个就报错了，不允许有两个
// export default function () {
//   console.log('world')
// }

// exports 是 module.exports 的一个引用
// 也就是说 exports === module.exports
// 也就是说 我修改了 exports 就相当于修改了 module.exports

// console.log(exports === module.exports)

// 在 webpack 中也不要有这样的写法
// 不支持，无法导出
// module.exports.a = 'aaa'
// module.exports.b = 'bbb'

// 它是可以的
// exports.a = 'aaa'
// exports.b = 'bbb'

// 将当前模块的 a 和 b 导出
// export const a = 'aaa'
// export const b = 'bbb'

const a = 'aaa'
const b = 'bbb'

// 错误的，必须引用到内部变量
// export 'abc'

const foo = 'bar'

// 语法报错，不支持
// export = {
//   foo
// }

// 保持，不支持
// export {
//   foo: foo
// }



// 语法报错，不允许
// export a

// export default function () {
//   console.log('fff')
// }

// function fn() {
//   console.log('fff')
// }

// export default fn

// export default 'hello'
/* harmony default export */ __webpack_exports__["default"] = (123);


/***/ })
/******/ ]);