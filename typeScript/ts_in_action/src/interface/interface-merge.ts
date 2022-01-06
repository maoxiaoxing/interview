// 接口合并
interface Am {
  x: number;
  // y: string;
  foo (bar: number): number; // 5
  foo (bar: 'a'): number; // 2
}

interface Am {
  y: number;
  foo (bar: string): string; // 3
  foo (bar: number[]): number[]; // 4
  foo (bar: 'b'): number; // 1
}

const am: Am = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar
  }
}

// 函数和命名空间合并
// 命名空间会成为 函数的属性
function Lib () {

}
namespace Lib {
  export const version = '1.0'
}
console.log(Lib.version)

// 类和命名空间合并
// 命名空间会成为 类 的静态属性
class Cm {}
namespace Cm {
  export let state = 1
}
console.log(Cm.state)

enum Color1 {
  Red,
  Yellow,
  Blue,
}
namespace Color1 {
  export function mix () {}
}
console.log(Color1)
