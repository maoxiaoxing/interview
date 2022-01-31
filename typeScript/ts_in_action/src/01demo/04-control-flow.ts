// 控制流分析
export function example () {
  let x: number | string | boolean

  x = Math.random() < .5
  if (Math.random() < 0.5) {
    x = 1
  } else {
    x = '1'
  }
  return x
}

let x = example()
x = 1
x = '1'
x = true
