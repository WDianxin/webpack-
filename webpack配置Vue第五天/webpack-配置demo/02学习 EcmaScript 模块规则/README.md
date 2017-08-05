# demo2

> 目标：学习 EcmaScript 模块规则，以后上了 webpack 都使用 EcmaScript 6 模块规范

webpack 支持 AMD、CommonJS、EcmaScript 6 Module 等模块规范。
也就是你会什么模块规范你就用哪种。

但是目前更推荐使用 EcmaScript 6 Module 模块规范，因为这是 EcmaScript 官方标准。

目前还有任何平台支持 EcmaScript 6 Module。

监视文件变化自动打包：

```bash
$ webpack --watch src/main.js dist/bundle.js
```

## EcmaScript 6 Module

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
