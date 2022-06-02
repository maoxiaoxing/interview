
class Animal {
  name: string
}

class Bird extends Animal {
  fly() {}
}

/*
  协变
  A 是 B 父类 即 B extends A
  B 赋值给 A 是协变
*/
let animal: Animal = new Animal()
animal = new Bird() // 协变

let fun1 = () => Animal
let fun2 = () => Bird
fun1 = fun2
// fun2 = fun1 // 父类型不能赋值给子类型


let fn1: (x: Animal) => void = (x: Animal) => {
  console.log(x.name)
}

let fn2: (x: Bird) => void = (x: Bird) => {
  x.fly()
}

fn1 = fn2
fn2 = fn1















export {}

