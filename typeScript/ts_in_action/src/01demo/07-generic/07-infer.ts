// infer 只能用在 extends
export type GetReturnType<T> = T extends (arg: any) => infer R ? R : any

type Num = GetReturnType<() => number>

type Time = GetReturnType<typeof setTimeout>
type Time1 = ReturnType<typeof setTimeout>

type Flatten<T> = T extends Array<infer U> ? U : any
type T1 = [number, string]
type F1 = Flatten<T1>

const arr = [1, '2', true]
const s: Flatten<typeof arr> = 1
