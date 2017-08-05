;(function (window) {
  const template = `
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <router-link to="/" exact tag="li"><a>Home</a></router-link>
    <router-link to="/hero" tag="li"><a>英雄管理</a></router-link>
  </ul>
</div>
`
  const Sidebar = {
    template
  }

  window.Sidebar = Sidebar

})(window)
