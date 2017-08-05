;
(function(window, axios) {
  const template = `
<div>
<h2>编辑英雄</h2>
<form @submit.prevent="update">
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

  const HeroUpdate = {
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

    created() {
      // 1. 获取路径参数 id
      const id = this.$route.params.id
      // 2. 根据 id 获取 hero 详情，展示到表单控件中
      axios.get(`/api/heros/${id}`)
        .then(res => {
          this.hero = res.data
        })
        .catch(err => {
          console.log(err)
        })
      // 3. 用户点击保存，处理保存的业务
    },

    methods: {
      update() {
        const id = this.hero._id
        // delete this.hero._id
        // 这里提交 this.hero 的时候，默认里面具有一个属性 _id
        // 服务端在进行修改的时候，不允许修改 _id
        // 所以这里就把 _id 给去除掉了
        // 其实更好的解决方案是在服务端把 _id 处理掉
        // 客户端可以发送多余的数据，服务端最多忽略而已
        axios.patch(`/api/heros/${id}`, this.hero)
          .then(res => {
            router.replace('/hero')
          })
      }
    }
  }

  window.HeroUpdate = HeroUpdate
})(window, axios)
