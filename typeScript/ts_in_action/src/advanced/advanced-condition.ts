
type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'Function' :
  'object'

  // (A | B) extends U ? X : Y
  // (A extends U ? X : Y) | (B extends U ? X : Y)
type T1 = TypeName<string>
type T2 = TypeName<string[]>

type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'


type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Diff 等价于 Exclude  Exclude<T, U> 相当于从 T 中 过滤掉 U 中的内容
type NotNull1<T> = Exclude<T, undefined | null>
type T6 = NotNull1<string | number | undefined | null>

// NotNull 等价于 NonNullable
type T7 = NonNullable<string | number | undefined | null>

// Extract<T, U> 相当于取 T 和 U 的交集
type T8 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T9 = ReturnType<() => string>
