// 等值缩小
function example(x: boolean | string, y: number | string) {
  if (x === y) {
    return x.toUpperCase() + y.toUpperCase()
  }
  return Number(x) + Number(y)
}

interface Container {
  value: number | null | undefined
}

export function multiplyValue(container: Container, factor: number) {
  if (container.value != null) {
    console.log(container.value += factor)
  }
}

multiplyValue({value: 5}, 6)
multiplyValue({value: null}, 6)
multiplyValue({value: undefined}, 6)



