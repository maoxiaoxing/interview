
function add3 (a: number, b: number) {
  return a + b
}

let add4: (a: number, y: number) => number

type Add1 = (a: number, b: number) => number

interface Add2 {
  (a: number, b: number): number
}

function add5 (a: number, b?: number) {
  return b ? a + b : a
}
console.log(add5(1,2))

// 函数重载
function add6 (...rest: number[]): number
function add6 (...rest: string[]): string
function add6 (...rest: any[]): any {
  const first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

