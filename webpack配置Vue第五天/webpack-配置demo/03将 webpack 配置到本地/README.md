# demo3

> 目标：将 webpack 配置到本地

1. 将 webpack 安装到本地项目（更推荐的方式，解决版本的差异来的问题）

```bash
$ npm i -D webpack
```

2. 在 `package.json` 中配置 `scritps` 字段：

```bash
"scripts": {
  "build": "webpack src/main.js dist/bundle.js"
},
```

3. 打包构建

```bash
$ npm run build
```
