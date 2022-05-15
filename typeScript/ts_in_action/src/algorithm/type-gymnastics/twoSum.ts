
// 数字转换数字
type ToArray<N, Arr extends number[] = []> = 
  Arr['length'] extends N 
    ? Arr 
    : ToArray<N, [...Arr, any]>

// 两数相加
type Add<T extends number, K extends number> = [...ToArray<T>, ...ToArray<K>]['length']

// 两数相减
type Sub<T extends number, K extends number> =
  ToArray<T> extends [...ToArray<K>, ...infer DValues]
    ? DValues['length']
    : never

type Tail<T> = T extends [infer First, ...infer Rest] ? Rest : []
type ArrayToUnion<T extends number[]> = T[number]

type TwoSum<N extends number[], K extends number> = 
  N['length'] extends 0
    ? false
    : Sub<K, N[0]> extends ArrayToUnion<Tail<N>>
      ? true
      : TwoSum<Tail<N>, K>


type cases = [
  TwoSum<[], 6>,
  TwoSum<[1,3,5], 6>,
  TwoSum<[1,3,5], 8>,
  TwoSum<[1,3,5], 100>,
  // ToArray<3>,
  // Add<2, 3>,
  // Sub<5,2>,
  // Tail<[1,3,5]>,
  // ArrayToUnion<[1,3,5]>
]

export {}
