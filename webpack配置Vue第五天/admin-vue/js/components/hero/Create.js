;
(function(window, axios) {
  const template = `
<div>
<h2>添加英雄</h2>
<form @submit.prevent="create">
  <div class="form-group">
    <label for="exampleInputEmail1">英雄名称</label>
    <input type="text" class="form-control" v-model="hero.name">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">英雄定位</label>
    <input type="text" class="form-control" v-model="hero.profession">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">背景故事</label>
    <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="hero.story"></textarea>
  </div>
  <button type="submit" class="btn btn-success">保存</button>
</form>
</div>
`

  const HeroCreate = {
    template,
    data() {
      return {
        hero: {
          name: '',
          profession: '',
          story: ''
        }
      }
    },

    methods: {
      create () {
        // 1. 监听表单的 submit 事件
        // 2. 在事件处理函数中，收集表单数据
        // 3. 发起请求，提交表单数据
        // 在 CORS 中，除了 get 都是非简单请求
        // 对于非简单请求，浏览器会先预检一下所请求的服务器是否支持该请求
        //  对方服务器应该发送具体响应告诉浏览器我是否支持
        //  如果告诉浏览器支持，则浏览器才会正确的发起二次请求
        axios.post('/api/heros', this.hero)
        // axios.post('http://127.0.0.1:5000/heros', this.hero)
          .then(res => {
            router.replace('/hero') // vue-router 的方式实现路径跳转
          })
          .catch(err => {
            console.log('请求出错了')
          })
      }
    }
  }

  window.HeroCreate = HeroCreate
})(window, axios)
