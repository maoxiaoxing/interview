export type VoidFunc = () => void

const fn: VoidFunc = () => true
const fn1: VoidFunc = () => ''
const f: void = fn()

// function fn2 (): void {
//   return ''
// }
