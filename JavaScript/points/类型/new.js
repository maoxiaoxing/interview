function _new (Super, ...args) {
  const obj = Object.create(null)
  obj.__proto__ = Super.prototype
  const res = Super.call(obj, ...arg)
  return typeof res === 'object' ? res : obj
}




function Person (name) {
  this.name = name
  return this
}
const p = new Person('mao')
console.log(p.name) // mao

function Person1 (name) {
  this.name = name
  return []
}
const p1 = new Person1('mao')
console.log(p1.name) // undefined

function Person2 (name) {
  this.name = name
  return 'mao'
}
const p2 = new Person2('mao')
console.log(p2.name) // mao

function Person3 (name) {
  this.name = name
  return {
    name: 'ji'
  }
}
const p3 = new Person3('mao')
console.log(p3.name) // 
