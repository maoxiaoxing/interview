export class Foo {
  static count = 0
  static #num = 1

  static getNum () {
    return Foo.#num
  }
}

Foo.count = Foo.count + 2
console.log(Foo.count)
console.log(Foo.getNum())
// console.log(Foo.#num)
