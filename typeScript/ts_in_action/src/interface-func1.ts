let add1: (a: number, b: number) => number

interface Add {
  (a: number, b: number): number
}

let add2: Add = (a, b) => a + b

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib () {
  const lib: Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}

