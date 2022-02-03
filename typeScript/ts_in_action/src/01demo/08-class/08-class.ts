export class Greeter {
  constructor () {
    this.name = 'bar'
  }
  public readonly name: string = 'zoo'
}

const g = new Greeter()
console.log(g.name)

class Animal {
  run () {
    console.log('animal run')
  }
}

class Dog extends Animal {
  run (s?: string) {
    if (s === undefined) {
      super.run()
      return 
    }
    console.log(s)
  }
}

const dog = new Dog()
dog.run()
dog.run('dog run')
