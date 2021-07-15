const test = function(age, sex, type) {
    console.log(this.name, age, sex, type)
}

const person = {
    name: '毛小星'
}

Function.prototype.my_call = function(context) {
    if (typeof this !== "function") {
        throw new Error(`${this} is not a function`)
    }

    const args = [...arguments].slice(1) // 获取除了context的所有参数
    
    context = context || window

    context.fn = this // 将函数赋值给 call 传入对象的属性

    const result = context.fn(...args) // 执行函数并把结果存起来

    delete context.fn // 删除属性
    return result // 返回函数执行结果
}

test(24, 'man', 'call')
test.my_call(person, 24, 'man', 'call')

// Function.prototype.my_apply = function(context) {
//     if (typeof this !== "function") {
//         throw new Error(`${this} is not a function`)
//     }

//     let result

//     context = context || window

//     context.fn = this

//     result = arguments[1] ? context.fn(...arguments[1]) : context.fn() // 如果传入数组参数就带参执行，否则直接执行函数

//     delete context.fn // 删除属性
//     return result // 返回函数执行结果
// }

// test(24, 'man', 'apply')
// test.my_apply(person, [24, 'man', 'apply'])

// Function.prototype.my_bind = function(context) {
//     if (typeof this !== "function") {
//         throw new Error(`${this} is not a function`)
//     }

//     let args = [...arguments].slice(1) // 获取实际参数

//     const me = this

//     return function fn() { // 返回闭包函数
//         return me.apply(
//             this instanceof fn ? this : context, // 判断上下文
//             args.concat(...arguments) // 拼接参数
//         )
//     }
// }
// test(24, 'man', 'bind')
// test.my_bind(person, 24)('man', 'bind')

