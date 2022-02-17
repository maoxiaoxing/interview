export function makeIteror (o) {
  if (typeof o !== 'object' || o === null) return false

  const keys = Reflect.ownKeys(o)
  let i = 0
  o[Symbol.iterator] = function *() {
    while (i < keys.length) {
      const key = keys[i++]
      yield [key, o[key]]
    }
  }
  return o
}

