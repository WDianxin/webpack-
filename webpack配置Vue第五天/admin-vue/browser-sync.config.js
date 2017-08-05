/**
 * Module dependencies.
 */
var browserSync = require('browser-sync').create()
var proxy = require('http-proxy-middleware') // require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
// 这里配置当以 /api 请求的时候，转发到 http://127.0.0.1:5000
// origin 原本的，源路径
// 一般发起请求的时候，浏览器都会在请求头中加入一个 origin 字段，表示当前请求的来源
//    例如我有一个页面：http://127.0.0.1:3000/index.html
//    页面中发起了一个请求：/api/users 浏览器会帮你自动加上 http://127.0.0.1:3000/api/users 发起请求
//    同时在请求头中加入一个源：http://127.0.0.1:3000
//    
//    这个源到底有什么用？
//       有些服务器会根据这个请求的来源来限制一些非法请求
//    例如：我在 http://127.0.0.1:3000/index.html 发起了一个 
//        http://127.0.0.1:5000/users 的请求
//        则该请求的 origin 来源是 http://127.0.0.1:3000
//        所以这里的 changeOrigin 表示将请求的来源 origin 改为 http://127.0.0.1:5000
//        这样就通过欺骗服务器的方式解决对方对 origin 来源的限制
//        欺骗对方服务器我不是代理
//        
//     pathRewrite 表示路径重写
//     举个例子：
//       如果我当前请求的是 /api/heros
//            则默认代理转发到 http://127.0.0.1:5000/api/heros
//       关键是我的服务器的接口没有 /api 前缀
//       所以这里我通过 pathRewrite 的方式重写路径的方式修改掉 /api
//        那这个时候如果请求 /api/heros
//        则先将 /api 重写成 ''
//        然后将重写的结果和剩余部分拼接起来发起请求：http://127.0.0.1:5000/heros
var jsonPlaceholderProxy = proxy('/api', {
  target: 'http://127.0.0.1:5000',
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  pathRewrite: {
    '^/api': ''
  },
  logLevel: 'debug'
})

/**
 * Add the proxy to browser-sync
 */
browserSync.init({
  server: {
    baseDir: './',
    middleware: [jsonPlaceholderProxy]
  },
  port: 8080,
  startPath: '/'
})

console.log('[DEMO] Server: listening on port 8080')
