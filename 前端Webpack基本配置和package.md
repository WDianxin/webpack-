const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  // foo: 'bar', // 不要附加 webpack 不识别的属性
  entry: './src/main.js', // 指定打包的入口
  output: {
    path: path.join(__dirname, './dist/'), // path 必须是一个绝对路径//通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
    filename: 'build.js' // 指定打包的出口   //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
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
      test: /\.txt$/,  //匹配txt
      use: [
        'raw-loader'
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/, //匹配图片
      use: ['file-loader']
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,  //匹配字体格式
      use: [
        'file-loader'
      ]
    }, {
      test: /\.less$/,     //匹配less
      use: [
        'style-loader', // 生成 style 节点，插入 DOM
        'css-loader', // 将 css 打包成 模块代码
        'less-loader' // 将 less 编译为 css
      ]
    }, {
      test: /\.js$/, // 匹配 .js 后缀名的文件
      exclude: /(node_modules|bower_components)/,  //排除该文件
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']), // 在打包构建之前先把 ./dist 目录清除  npm run build 执行打包命令
    // new webpack.optimize.UglifyJsPlugin(), // 对打包结果进行压缩，只能压缩 EcmaScript 5，不能压缩 EcmaScript 6 代码
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR 热更新
    new HtmlWebpackPlugin({
      // title: 'Output Management'
      // title:'自动生成自定义标题',//如果使用了模板，就使用模板里的title，这里的title设置会失效，哪怕模板里的title为空
      // template:path.join(__dirname,('./index.html')) ,  //模板名称
      // template:__dirname +'./index.html', //也可以
      template:'./index.html', //也可以
      filename: 'index.html',  //最终生成的文件名,默认是index.html
      // inject:true,// | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。
      inject: 'body', //自动添加到body中
      // chunks:['index'] ,//指定生成的文件demo.hmtl需要包括entry里的哪些入口文件(这里是index,main.js不会引入),不设置的话所有入口js文件都会被引入进来
      minify: {
        // removeComments: true,        //去注释
        // collapseWhitespace: true,    //压缩空格
        // removeAttributeQuotes: true  //去除属性引用
      }
    })
  ]
}



下面是package.json文件 npm run build打包   npm run dev 开发运行

{
  "name": "demo3",
  "version": "1.0.0",
  "description": "> 目标：学习 webpack 的配置文件",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "watch": "webpack --watch",
    "predev": "npm install",
    "dev": "webpack-dev-server --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-env": "^1.6.0",
    "clean-webpack-plugin": "^0.1.16",
    "css-loader": "^0.28.4",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.30.1",
    "less": "^2.7.2",
    "less-loader": "^4.0.5",
    "raw-loader": "^0.5.1",
    "style-loader": "^0.18.2",
    "uglifyjs-webpack-plugin": "^1.0.0-beta.3",
    "webpack": "^3.4.1",
    "webpack-dev-server": "^2.6.1"
  },
  "dependencies": {
    "jquery": "^3.2.1"
  }
}

