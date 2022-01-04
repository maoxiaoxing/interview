
interface Foo {
  bar: number
}

// const foo = {} as Foo
// foo.bar = 1

const foo: Foo = {
  bar: 1
}

// 接口兼容性
interface X {
  a: number;
  b: number;
}
interface Y {
  a: number;
  b: number;
  c: number;
}
let x: X = {a: 1, b: 2}
let y: Y = {a: 1, b: 2, c: 3}
// y 可以被赋值给 x ，因为 y 包含 x 的所有类型
x = y
// y = x

type Handler = (a: number, b: number) => void
function hof (handler: Handler) {
  return handler
}

const handler1 = (a: number) => {}
hof(handler1)
const handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

let a = (p1: number, p2: number) => {}
let b = (p1?: number, p2?: number) => {}
let c = (...args: number[]) => {}
// 固定参数 可以兼容 可选参数 和 剩余参数
a = b
a = c
// 可选参数 不兼容 固定参数 和 剩余参数
// b = c
// b = a
// 剩余参数 可以兼容 固定参数 和 可选参数
c = a
c = b

// 参数多的 兼容 参数少的
interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let p2d = (point: Point2D) => {}
let p3d = (point: Point3D) => {}

p3d = p2d
// p2d = p3d

// 返回值类型
let f1 = () => ({name: 'mxx'})
let f2 = () => ({name: 'mxx', location: 'Beijing'})
f1 = f2
// f2 = f1

// 函数重载 重载的函数 参数和类型必须一一对应
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}


// 枚举兼容性
enum Fruit {Apple, Banana}
enum Color {Red, Yellow}
// 枚举和 number 是兼容的
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举类型 和 其他枚举类型不兼容
// let color: Color.Red = Color.Yellow
// let color: Color.Red = Fruit.Apple


// 类兼容性
// 类的 静态成员 和 构造函数 不参与比较
// 不相关的两个类 如果含有 私有成员， 也是不兼容的
class A {
  constructor (p: number, q: number) {}
  id: number = 1
  // private name: string = ''
}

class B {
  static s = 1
  constructor (p: number) {}
  id: number = 2
  // private name: string = ''
}
let aa = new A(1,2)
let bb = new B(1)
aa = bb
bb = aa

class AChild extends A {}
let achaild = new AChild(1,2)
aa = achaild
achaild = aa


// 泛型兼容性
interface Empty<T> {
  value: T;
}
let obj1: Empty<number> = { value: 1 }
let obj2: Empty<string> = { value: '1' }
// obj1 = obj2
// obj2 = obj1


// 泛型函数兼容性
let loga = <T>(x: T): T => {
  console.log('y')
  return x
}
let logb = <T>(y: T): T => {
  console.log('y')
  return y
}
loga = logb
