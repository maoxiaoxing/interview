export function doSomeThing (x: string | null) {
  let res = ''
  if (x) {
    res = x.toLowerCase()
  }
  return res
}

export function doSomeThing1 (x: string | undefined) {
  return x!.toLowerCase()
}
