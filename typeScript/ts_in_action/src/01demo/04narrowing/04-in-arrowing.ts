// in 缩小
export type Fish = {
  swim: () => void
}

type Dog = {
  run: () => void
}

function move (aniaml: Fish | Dog) {
  if ('swim' in aniaml) {
    return aniaml.swim()
  }
  return aniaml.run()
}
