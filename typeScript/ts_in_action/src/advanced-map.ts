
interface Obj {
  a: string;
  b: number;
  c: boolean;
}

// 变成只读属性
type ReadonlyObj = Readonly<Obj>

// 可选属性
type partialObj = Partial<Obj>

// 抽取子集
type PickObj = Pick<Obj, 'a' | 'b'>

type RecordObj = Record<'x' | 'y', Obj>
