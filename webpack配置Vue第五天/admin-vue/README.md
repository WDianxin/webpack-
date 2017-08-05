# admin-vue

## 运行说明

1. `npm run dev` 启动开发服务

提示：在开发服务中，已经配置好了服务器代理，默认所有以 `/api` 开头的请求自动代理转发到 `http://127.0.0.1:5000` 服务。

## RESTful API 接口设计规范

- [怎样用通俗的语言解释REST，以及RESTful？](https://www.zhihu.com/question/28557115)
- [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful)
- [RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)

## 跨域解决方案

### 代理

#### 代理的本质

- 服务端没有跨域限制

### 服务端 CORS

### JSONP

- 只支持 get

---

## 接口 mock 工具：json-server

对数据提供一个比较规范的 RESTful 风格的 API
这个工具只适合在开发阶段用于数据接口 mock 。

## 明天知识点

- 完善 CRUD
- Vue 中的 .vue 单文件组件
- webpack 类似于 gulp
- 博学谷
