// 当把 vue-router.js 引入页面之后，该文件会在全局提供一个 VueRouter 构造函数
// 咱们要做的就是使用该构造函数去创建咱们的路由容器，配置路由表
//    路由表：
//      根据不同的请求路径映射到具体的组件
;
(function(window, VueRouter, Home, HeroList, HeroCreate, HeroShow, HeroUpdate) {
  // 后面会加入模块系统的支持，提升开发效率
  // const Home = require('../components/Home/Home.js')
  // const HeroList = require('../components/hero/List.js')
  // 0. 引入 vue-router.js
  // 1. 实例化 VueRouter
  // 2. 通过 routes 选项配置路由表
  // 3. 导出 router
  // 4. 在根实例上通过 router 选项挂载 router 实例使路由生效
  const router = new VueRouter({
    // 使用 routes 选项配置路由表
    // routes 是一个数组
    // 数组中存储一个一个的对象
    // 对象中通过 path 和 component 来配置路由映射关系
    //    path 必须以 / 开头，不能加 #
    routes: [{
        path: '/',
        component: Home
      },
      {
        path: '/hero',
        component: HeroList
      },
      {
        path: '/hero/create',
        component: HeroCreate
      },
      {
        path: '/hero/update/:id',
        component: HeroUpdate
      },
      {
        path: '/hero/show/:id',
        component: HeroShow
      }
    ],
    linkActiveClass: 'active' // 全局配置路由导航的高亮样式类名
  })

  window.router = router
})(window, VueRouter, Home, HeroList, HeroCreate, HeroShow, HeroUpdate)
