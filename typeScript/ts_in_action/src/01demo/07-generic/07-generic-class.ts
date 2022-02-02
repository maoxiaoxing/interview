export class GeneRicNumber<T> {
  zValue: T
  add: (x: T, y: T) => T
}

const genericNumber = new GeneRicNumber<number>()
genericNumber.zValue = 0
genericNumber.add = (x, y) => {
  return x + y
}

class Animal {
  legs: number = 4
}

class Dog extends Animal {

}

function creatInstance<T extends Animal>(C: new () => T): T {
  return new C()
}

const dog = creatInstance(Dog)
console.log(dog.legs)
