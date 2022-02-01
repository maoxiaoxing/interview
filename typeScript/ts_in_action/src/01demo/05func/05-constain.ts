// 限制条件
interface Length {
  length: number;
}

export function longest<T extends Length> (x: T, y: T): T {
  if (x.length > y.length) return x
  return y
}

longest([1], [2,3])
longest('123', '4567')
