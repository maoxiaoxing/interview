let obj3 = {
  a: 1,
  b: 2,
  c: 3,
}

function getValues<T, K extends keyof T> (obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}

console.log(getValues(obj3, ['a', 'b']))
// console.log(getValues(obj3, ['e', 'f']))
