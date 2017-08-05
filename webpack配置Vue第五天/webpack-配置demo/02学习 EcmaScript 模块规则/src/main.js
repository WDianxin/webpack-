// 参考文档：http://es6.ruanyifeng.com/#docs/module

// const foo = require('./foo')

// import foo from './foo'

// foo()

// 加载文件可以省略后缀名
//    它的规则就是 .js .node .json
// const foo = require('./foo')
// console.log(foo.a)

// 这种方式默认只加载 export default 导出的成员
import foo from './foo'
console.log(foo)

// 如果想要加载非 default 的成员，必须通过解构赋值的方式
// 在模块加载的解构赋值中，可以通过 as 起别名
import { a as c } from './foo'

console.log(c)

// 上面的方式加载非 default 导出的成员比较麻烦，如果导出成员比较多的情况下
// 这里可以一次性加载所有 export 导出的成员
import * as fooModule from './foo'

console.log(fooModule)

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
