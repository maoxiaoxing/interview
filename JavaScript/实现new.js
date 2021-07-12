
function Person(name, age) {
    this.name = name

    return ''
}

Person.prototype.age = 18
Person.prototype.name = 18

const person1 = new Person('Jack', 12)
console.log(person1.name)
console.log(person1.age)




function my_new(Super, ...args) {
    const obj = {}
    obj._proto_ = Super.prototype // 将 构造函数 的 原型对象 赋值给新建对象的 隐式原型
    const result = Super.call(obj, ...args) // 执行 构造函数 并将 构造函数里面的this指向 新建对象obj

    return typeof result === 'object' ? result : obj // 如果 执行结构是一个对象，那么就返回执行结果 否则返回新建对象
}

const person2 = my_new(Person, '毛小星', 25)

console.log(person2.name)
console.log(person2.age)

function Fn(a) {
    this.a= a

    return []
}

Fn.prototype.a = 1
Fn.prototype.b = 2
Fn.prototype.c = 3
const fn = new Fn(4)

console.log(fn.a, fn.b, fn.c) 