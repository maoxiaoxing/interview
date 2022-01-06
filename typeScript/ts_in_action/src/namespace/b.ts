/// <reference path="a.ts" />

namespace Shape {
  export function square (x: number) {
    return x ** 2
  }
}

console.log(Shape.circle(1))
console.log(Shape.square(1))

// 别名
import circle = Shape.circle
