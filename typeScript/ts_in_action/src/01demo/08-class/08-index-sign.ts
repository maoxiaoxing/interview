export class Bar {
  [s: string]: number | string | ((s: string) => boolean)

  baz = '1'
  num = 1
  run(s: string) {
    return this[s] as unknown as boolean
  }
}