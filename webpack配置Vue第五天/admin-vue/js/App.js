;
(function(window, Navbar, Sidebar) {
  /**
   * 根组件
   */

  const template = `
<div id="app">
<app-navbar></app-navbar>
<div class="container-fluid">
  <div class="row">
    <app-sidebar></app-sidebar>
    <!-- 这里不能写死，应该根据路由的切换显示不同的组件内容 -->

    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <!-- router-view 组件是路由的出口，被匹配到的组件将被渲染到这里 -->
      <router-view></router-view>
    </div>
  </div>
</div>
</div>
`

  const App = {
    template,
    components: {
      AppNavbar: Navbar,
      AppSidebar: Sidebar
    }
  }

  window.App = App

})(window, Navbar, Sidebar)
