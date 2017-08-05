<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-footer></app-footer>
    <p>哈哈</p>
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue'
  import Sidebar from './components/layout/Sidebar.vue'
  import Footer from './components/layout/Footer.vue'
  // 导出一个对象作为组件对象
  export default {
    // template: template 当你去加载 .vue 文件的时候，vue-loader 会自动将 template 节点中的内容作为该对象的 template 属性
    data () {
      return {
        title: 'App Component'
      }
    },

    methods: {
      handleMe () {
        window.alert('hello world')
      }
    },

    components: {
      'app-header': Header,
      'app-sidebar': Sidebar,
      'app-footer': Footer
    }
  }
</script>

<!-- 顺序不要乱调 -->
<style scoped>
  /*#app {
    color: pink;
  }*/
  p {
    color: pink;
  }
</style>
