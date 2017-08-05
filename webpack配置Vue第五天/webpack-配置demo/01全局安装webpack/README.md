# demo1

```bash
$ npm i -g webpack
```

初始化以下目录结构：

```
- src 存储源码的目录
- dist 存储打包之后的文件，用于浏览器加载
- index.html
```

打包：

```bash
# 告诉 webpack 以 src/main.js 为入口，从该文件开始，将所有的依赖都打包到 dist/bundle.js 文件中
# 如果 dist/bundle.js 文件不存在则会自动新建，如果已存在，则会覆盖
$ webpack src/main.js dist/bundle.js
```
