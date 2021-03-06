;(function (window, axios) {
  const template = `
<div>
<p>英雄名称： {{ hero.name }}</p>
<p>英雄定位： {{ hero.profession }}</p>
<p>背景故事： {{ hero.story }}</p>
</div>
`
  const HeroShow = {
    template,
    data () {
      return {
        hero: {
          name: '',
          profession: '',
          story: ''
        }
      }
    },

    created () {
      // 1. 拿到路径参数 id
      const id = this.$route.params.id
      // 2. 根据 id 发请求，获取 hero 详情数据
      axios.get(`/api/heros/${id}`)
        .then(res => {
          this.hero = res.data
        })
        .catch(err => {
          console.log(err)
        })
      // 3. 将响应结果渲染到页面中
    }
  }

  window.HeroShow = HeroShow
})(window, axios)
