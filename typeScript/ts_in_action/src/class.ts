
class Dog {
  constructor (name: string) {
    this.name = name
  }
  public name: string
  run() {}
  private pri () {}
  protected pro() {}
  static food: string[]
}

const dog = new Dog('hashiqi')
// dog.pri()
// dog.pro()

class Husky extends Dog {
  constructor (name: string, color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
  color: string
  private legs: number = 4
}

abstract class Animal {
  constructor(name: string) {
      this.name = name
  }
  protected name: string
  eat () {}
  abstract sleep (): void
}

class Panda extends Animal {
  constructor(name: string) {
    super(name)
  }
  sleep () {
    console.log(`${this.name} sleep`)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name)
  }

  sleep () {
    console.log(`${this.name} sleep`)
  }
}
const cat = new Cat('maomao')

const panda = new Panda('panpan')

const animals: Animal[] = [panda, cat]
animals.forEach((animal) => {
  animal.sleep()
})

class WorkFlow {
  stet1() {
    return this
  }
  stet2() {
    return this
  }
}

new WorkFlow().stet1().stet2()

class Myflow extends WorkFlow {
  next() {
    return this
  }
}

new Myflow().next().stet1().next().stet2()
