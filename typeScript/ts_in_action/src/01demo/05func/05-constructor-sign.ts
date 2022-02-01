// 构造签名
export class Ctor {
  s: string;
  constructor(s: string) {
    this.s = s
  }
}

type MxxContructor = {
  new (s: string): Ctor
}

function mxxHandleCtor(C: MxxContructor) {
  const c = new C('mxx')
  return c
}

const mxx = mxxHandleCtor(Ctor)
console.log(mxx.s)

interface MxxDateConstructor {
  new (s: string): Date;
  (s: number): string;
}

function handleMxxDate(MxxDate: MxxDateConstructor) {
  const d = new MxxDate('2022-02-01')
  const d1 = MxxDate(100)
  console.log(d)
  console.log(d1)
}
handleMxxDate(Date)
