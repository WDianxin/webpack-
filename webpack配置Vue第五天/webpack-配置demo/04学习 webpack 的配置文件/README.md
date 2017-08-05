# demo3

> 目标：学习 webpack 的配置文件

为了解决在 package.json 中修改配置信息越来越麻烦，
所以 webpack 支持将打包配置信息配置到一个默认的 `webpack.config.js` 文件中。

1. 新建 `webpack.config.js` 文件，写入以下内容

```
module.exports = {
  entry: './src/main.js', // 指定打包的入口
  output: {
    filename: './dist/bundle.js' // 指定打包的出口
  }
}
```

2. 将 package.json 文件中的 scripts 改为：

```json
"scripts": {
  "build": "webpack"
},
```

3. 打包构建

```bash
npm run build
```

4. 加入自动监视打包

```json
"scripts": {
  "build": "webpack", // 单次构建
  "watch": "webpack --watch" // 自动监视构建
},
```
