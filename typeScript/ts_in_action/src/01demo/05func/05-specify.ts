// 指定类型参数
export function combine<T> (arr1: T[], arr2: T[]): T[] {
  return arr1.concat(arr2)
}

const arr = combine([1], [1,2,3])
const arr1 = combine(['1'], ['2', '3'])
const arr2 = combine<string | number>([1], ['2'])
