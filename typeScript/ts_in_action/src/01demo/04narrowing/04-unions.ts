enum ShapeType {
  Square = 'square',
  Circle = 'circle'
}

// export interface Shape {
//   kind: ShapeType;
//   radius?: number;
//   sideLength?: number;
// }

// function handleShape (shape: Shape) {
//   if (shape.kind === ShapeType.Circle) {

//   }
// }

// const circle1: Shape = {
//   kind: ShapeType.Circle,
// }
// handleShape(circle1)

interface Circle {
  kind: ShapeType.Circle,
  radius: number
}
interface Square {
  kind: ShapeType.Square;
  sideLength: number;
}
type Shape = Circle | Square

function getArea (shape: Shape) {
  if (shape.kind === ShapeType.Circle) {
    return Math.PI * shape.radius ** 2
  }
  return shape.sideLength ** 2
}













export {}
