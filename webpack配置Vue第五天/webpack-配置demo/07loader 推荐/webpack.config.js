const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // foo: 'bar', // 不要附加 webpack 不识别的属性
  entry: './src/main.js', // 指定打包的入口
  output: {
    path: path.join(__dirname, './dist/'), // path 必须是一个绝对路径
    filename: 'build.js' // 指定打包的出口
  },
  devtool: 'inline-source-map', // 建议在开发阶段加上，可以看到原始文件的提示信息
  devServer: {
    hot: true, // 告诉 webpack-dev-server ，我们要启用热更新
    contentBase: './dist' // 开启 dev-server ，将 ./dist 作为 Web 目录
  },
  module: {
    rules: [{
      test: /\.css$/, // 匹配当加载 .css 后缀名的文件的时候，使用 style-loader 和 css-loader 插件处理
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.txt$/,
      use: [
        'raw-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }, {
      test: /\.less$/,
      use: [
        'style-loader', // 生成 style 节点，插入 DOM
        'css-loader', // 将 css 打包成 模块代码
        'less-loader' // 将 less 编译为 css
      ]
    }, {
      test: /\.js$/, // 匹配 .js 后缀名的文件
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']), // 在打包构建之前先把 ./dist 目录清除
    // new webpack.optimize.UglifyJsPlugin(), // 对打包结果进行压缩，只能压缩 EcmaScript 5，不能压缩 EcmaScript 6 代码
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR 热更新
    new HtmlWebpackPlugin({
      // title: 'Output Management'
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeAttributeQuotes: true
      }
    })
  ]
}
