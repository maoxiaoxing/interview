export function getValue<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

const obj = {
  a: 1,
  b: 2,
}
console.log(getValue(obj, 'a'))
