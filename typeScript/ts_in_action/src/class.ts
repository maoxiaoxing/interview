
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

