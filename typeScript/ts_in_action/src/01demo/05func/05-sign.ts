// 函数签名
export type DesFunc = {
  description: string,
  (n: number): number
}

function doSomething (fn: DesFunc) {
  console.log(`${fn.description} returned ${fn(6)}`)
}

const desFn = (n: number) => n
desFn.description = 'mxx'

doSomething(desFn)
