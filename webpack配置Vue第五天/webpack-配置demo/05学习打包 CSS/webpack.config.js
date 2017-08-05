module.exports = {
  entry: './src/main.js', // 指定打包的入口
  output: {
    filename: './dist/bundle.js' // 指定打包的出口
  },
  module: {
    rules: [{
      test: /\.css$/, // 匹配当加载 .css 后缀名的文件的时候，使用 style-loader 和 css-loader 插件处理
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
