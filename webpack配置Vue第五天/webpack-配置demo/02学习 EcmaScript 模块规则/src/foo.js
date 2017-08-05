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

export {
  foo,
  a
}

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
export default 123
