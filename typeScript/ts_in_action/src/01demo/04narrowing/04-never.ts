enum ShapeType {
  Square = 'square',
  Circle = 'circle',
  Triangle = 'triangle',
}

interface Circle {
  kind: ShapeType.Circle,
  radius: number
}
interface Square {
  kind: ShapeType.Square;
  sideLength: number;
}
interface Triangle {
  kind: ShapeType.Triangle;
  sideLength: number;
}
type Shape = Circle | Square | Triangle

function getArea (shape: Shape) {
  switch (shape.kind) {
    case ShapeType.Circle:
      return Math.PI * shape.radius ** 2
    case ShapeType.Square:
      return shape.sideLength ** 2
    // default:
    //   const _check: never = shape
    //   return _check
  }
}













export {}
