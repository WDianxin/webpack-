// 在使用 EcmaScript 6 Module 模块化解决方案中，建议加载 vue.esm.js 完整版的编译文件
// 在使用 CommonJS Module 规范中，建议加载 vue.common.js
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'

new Vue({
  el: '#app',
  template: '<App></App>',
  components: {
    App
  }
})
