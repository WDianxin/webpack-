const mongodb = require('mongodb')
const ObjectID = require('mongodb').ObjectID

const MongoClient = require('mongodb').MongoClient

// 数据库连接字符串
const url = 'mongodb://localhost:27017/itcast'

/* 查询所有 */
exports.query = (req, res) => {
  // 操作数据库获取所有 heros 数据
  // 发送给客户端
  MongoClient.connect(url, function(err, db) {
    // 服务端错误，响应 500
    if (err) {
      return res.status(500).json({
        message: err.message
      })
    }

    db.collection('heros').find({}).toArray(function(err, docs) {
      if (err) {
        return res.status(500).json({
          message: err.message
        })
      }
      res
        .status(200)
        // .set('Access-Control-Allow-Origin', '*')
        .json(docs)
      db.close()
    })
  })
}

/* 查询单个 */
exports.queryOne = (req, res) => {
  // 可以通过 req.params 来获取动态路径参数
  // 1. 获取动态路径参数 id
  // 2. 查询数据库
  // 3. 发送响应
  const id = req.params.id
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.status(500).json({
        message: err.message
      })
    }

    db.collection('heros')
      .findOne({
        _id: new ObjectID(id)
      }, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message
          })
        }
        res.status(200).json(result)
      })
  })
}

/* 创建 */
exports.create = (req, res) => {
  // 创建 hero
  // 发送响应
  // 1. 获取表单提交数据
  // 2. 将数据持久化到数据库
  // 3. 发送响应给客户端
  MongoClient.connect(url, function(err, db) {
    // 服务端错误，响应 500
    if (err) {
      return res.status(500).json({
        message: err.message
      })
    }

    db.collection('heros')
      .insertOne(req.body, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message
          })
        }
        res
          .status(201)
          // .set('Access-Control-Allow-Origin', '*')
          // .set('Access-Control-Allow-Methods', '*')
          .json(result.ops[0])
      })
  })
}

/* 更新 */
exports.update = (req, res) => {
  const id = req.params.id
  delete req.body._id
  MongoClient.connect(url, function(err, db) {
    // 服务端错误，响应 500
    if (err) {
      return res.status(500).json({
        message: err.message
      })
    }

    db.collection('heros')
      .updateOne({
        _id: new ObjectID(id)
      }, {
        $set: req.body
      }, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message
          })
        }
        res
          .status(201)
          .json({})
      })
  })
}

/* 删除 */
exports.delete = (req, res) => {
  const id = req.params.id
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.status(500).json({
        message: err.message
      })
    }

    db.collection('heros')
      .deleteOne({
        _id: new ObjectID(id)
      }, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message
          })
        }
        res
          .status(204)
          .json({})
      })
  })
}
