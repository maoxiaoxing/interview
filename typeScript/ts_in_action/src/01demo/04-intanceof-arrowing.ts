// instanceof 缩小
export function logValue(x: Date | string) {
  if (x instanceof Date) {
    return x.toUTCString()
  }
  return x.toLowerCase()
}

console.log(logValue(new Date()))
console.log(logValue('Date'))
