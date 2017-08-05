// import './css/main.css'

import './less/main.less'

import fooModule from './foo'

let foo = 'bar'

const arr = [10, 20, 30]

arr.forEach(num => console.log(num))

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function () {
  setTimeout(() => {
    console.log(this.name)
  }, 1000)
}

new Person('张三').sayName()
