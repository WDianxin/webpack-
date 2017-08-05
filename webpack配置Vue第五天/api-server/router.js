const express = require('express')
const handler = require('./handler')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello')
})

router
  .get('/heros', handler.query)
  .post('/heros', handler.create)

  // 只匹配两级路径
  // 其中第一级必须是 /heros
  // 第二级随便
  .get('/heros/:id', handler.queryOne)
  .patch('/heros/:id', handler.update)
  .delete('/heros/:id', handler.delete)

module.exports = router
