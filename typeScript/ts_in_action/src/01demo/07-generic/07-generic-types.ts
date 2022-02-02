export interface GeneFunc<T> {
  (arg: T): T
}

const fn: GeneFunc<string> = (arg) => {
  return '123'
}

interface GeneFunc1 {
  <T>(arg: T): T
}

const fn1: GeneFunc1 = <T>(arg: T) => {
  return arg
}
fn1<string>('1')
