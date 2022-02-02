// 泛型对象
export interface Box<T> {
  a: T,
}

interface A {
  b: string
}

const a: Box<A> = {
  a: {
    b: ''
  }
}

interface Gene<T> {
  a: T
}

type OrNone<T> = T | null
type OneOrMany<T> = T | T[]
type OneOrManyOrNull<T> = OrNone<OneOrMany<T>>
type OneOrManyOrNullOrString = OneOrManyOrNull<string>

let b: OneOrManyOrNull<number> = []
b = 1
b = null
// b = ''
let s: OneOrManyOrNullOrString = ['']
s = '1'
s = null
