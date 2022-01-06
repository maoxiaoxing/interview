interface DogInterface {
  run(): void
}

interface Catinterface {
  jump(): void
}

// 交叉类型
let pet : DogInterface & Catinterface = {
  run() {},
  jump() {}
}

let a1: number | string = 'a'

class Dog1 implements DogInterface {
  run () {}
  eat () {}
}

class Cat1 implements Catinterface {
  jump () {}
  eat () {}
}

enum Master { 
  Boy,
  Girl,
}

function getPet (master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1()
  pet.eat()
  return pet
}

interface Square {
  kind: 'square';
  size: number
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  r: number;
}

// 联合类型
type Shape = Square | Rectangle | Circle

function area (s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size ** 2
    case 'rectangle':
      return s.height * s.width
    case 'circle':
      return Math.PI * s.r ** 2
    default:
        return ((e: never) => {throw new Error(e)})(s)
  }
}

console.log(area({kind: 'circle', r: 3}))

