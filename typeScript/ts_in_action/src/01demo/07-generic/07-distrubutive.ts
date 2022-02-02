// 分布式条件类型
export type ToArray<T> = T extends any ? T[] : never
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never

const arr1: ToArray<number | string> = [1]
const arr2: ToArrayNonDist<number | string> = [1, '1']

