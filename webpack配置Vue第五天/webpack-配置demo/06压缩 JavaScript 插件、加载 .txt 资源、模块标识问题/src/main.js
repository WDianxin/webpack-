import './css/main.css'

// import data from 'raw-loader!./data.txt'
import data from './data.txt'

console.log(data)

// 相对路径


// 绝对路径，基本不用

// 第三方包

import $ from 'jquery'

$(function () {
  window.alert('hello jquery')
})
