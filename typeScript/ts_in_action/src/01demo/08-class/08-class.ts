export class Greeter {
  constructor () {
    this.name = 'bar'
  }
  public readonly name: string = 'zoo'
}

const g = new Greeter()
console.log(g.name)
