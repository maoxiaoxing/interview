export function fn () {
  return {
    x: 1,
    y: 1,
  }
}

type Position = ReturnType<typeof fn>
const positon: Position = {
  x: 1,
  y: 1,
}

type S = ReturnType<typeof setTimeout>


