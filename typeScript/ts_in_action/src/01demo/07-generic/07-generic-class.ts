export class GeneRicNumber<T> {
  zValue: T
  add: (x: T, y: T) => T
}

const genericNumber = new GeneRicNumber<number>()
genericNumber.zValue = 0
genericNumber.add = (x, y) => {
  return x + y
}
