/**
 * 程序的入口
 * 作用：实例化 Vue 应用程序，配置入口节点、路由等信息
 */

// 1. 实力化 Vue
// 2. 找到入口
// 3. 将 App 根组件替换到入口位置（最终结果不包含入口节点）
// 4. 挂载路由

;
(function(Vue, App, router) {
  new Vue({
    el: '#app',
    router, // 挂载路由，使路由生效
    template: '<App/>', // 实例的 template 会把作用到的 DOM 节点替换掉
    components: { App }
  })
})(Vue, App, router)
