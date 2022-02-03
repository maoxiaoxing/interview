export class Greeter {
  _length: number
  get length() {
    return this._length
  }
  set length(value) {
    this._length = value
  }
}

const g: Greeter = new Greeter()
g.length = 1
console.log(g._length, g.length)
