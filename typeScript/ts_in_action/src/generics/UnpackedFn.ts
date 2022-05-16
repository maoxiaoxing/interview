export type UnpackedFn<T> = T extends (...args: any[]) => infer U ? U : T

interface foo {
  (a: string): number
}

interface foo {
  (a: string): number | string
}

type U2 = UnpackedFn<foo>
