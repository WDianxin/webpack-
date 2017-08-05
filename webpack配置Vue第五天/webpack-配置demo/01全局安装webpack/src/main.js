// 开发的时候就像在 Node 中一样使用模块化的方式
// 开发结束需要将 src 中的源码使用 webpack 打包
// 打包的结果，会为每个文件模块加入私有作用域（文件代码运行在沙箱中）
// 模块与模块之间使用 exports、module.exports、require 来进行通信交互
const num = 10

const foo = require('./foo')

foo()
