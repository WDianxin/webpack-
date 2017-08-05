;
(function(window) {
  const template = `
<div>
  <h2 class="sub-header">英雄管理</h2>
  <router-link to="/hero/create" class="btn btn-success">添加英雄</router-link>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>英雄名称</th>
          <th>定位</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hero, index) in heros">
          <td>{{ index + 1 }}</td>
          <td>{{ hero.name }}</td>
          <td>{{ hero.profession }}</td>
          <td>
            <router-link :to="'/hero/show/' + hero._id">查看</router-link>
            <router-link :to="'/hero/update/' + hero._id">编辑</router-link>
            <a @click.prevent="remove(hero._id)" href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`

  // Vue 中没有内置任何和 ajax 相关的请求库
  // 有一个第三方 Vue 插件：vue-resouce 也可以提供 ajax 的能力
  // axios
  //    0. npm i -S axios
  //    1. 引入 index.html 中
  //    引入之后在全局就可以通过 axios 对象访问其中的 ajax 方法
  // axios 是一个封装了 Promise 形式的 ajax 请求库
  // 和 Vue 没有半毛钱关系
  // 这个库专门用来和服务端交互
  // 跨域的解决方案
  //    1. 代理，最优解决方案
  //    2. 服务端在响应头中加入 Access-Allow-Origin
  //        跨域资源共享 CORS 详解
  //        http://www.ruanyifeng.com/blog/2016/04/cors.html
  //    3. jsonp
  //       只支持 get 请求
  //       服务端和客户端同时做特殊擦处理才可以
  //       客户端发请求的时候需要在请求中加入 callback=回调函数名称
  //       服务端在响应数据的时候需要在内容两边包上 回到函数名称(内容数据)

  // 'http://127.0.0.1:3000/heros'
  // '/api/heros'
  // axios.get('http://127.0.0.1:3000/heros')
  //   .then(function(response) {
  //     console.log(response.data)
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })

  const HeroList = {
    template,
    data() {
      return {
        heros: [{
          id: 1,
          name: 'aaa',
          profession: '战士'
        }]
      }
    },

    methods: {
      remove(id) {
        if (!window.confirm('Are you sure?')) return
        axios.delete(`/api/heros/${id}`)
          .then(res => {
            // 删除成功，重新请求最新数据即可
            this.getHeros()
          })
      },

      getHeros() {
        axios.get('/api/heros')
          // axios.get('http://127.0.0.1:5000/heros')
          .then(res => {
            this.heros = res.data
          })
          .catch(function(error) {
            console.log(error)
          })
      }
    },

    // 在 beforeCreate 中拿不到 data 中的数据，所以不在这里发请求
    beforeCreate() {
      // console.log('beforeCreate', this.heros)
    },
    // 在 created 中是最早拿到 data 数据的生命钩子
    // 所以这里发请求更合适，越早越好
    created() {
      this.getHeros()
    }
  }

  window.HeroList = HeroList

})(window)
