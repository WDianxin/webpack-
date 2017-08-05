# demo8

> 目标：打包 .vue 单文件组件

## 解决文件资源路径引用问题：将 index.html 也打包到 dist 目录中

1. 安装依赖

```bash
$ npm install --save-dev html-webpack-plugin
```

2. 配置

## 清理 dist 文件夹

1. 安装依赖

```bash
$ npm install clean-webpack-plugin --save-dev
```

## 将 EcmaScript 6 语法转换为 EcmaScript 5

1. 安装依赖

```bash
$ npm install --save-dev babel-loader babel-core babel-preset-env
```

## webpack-dev-server

```bash
$ npm install --save-dev webpack-dev-server
```

## 打包编译 .vue 单文件组件

1. 安装依赖

```bash
$ npm i -D vue-loader vue-template-compiler
```

2. 配置 loader
