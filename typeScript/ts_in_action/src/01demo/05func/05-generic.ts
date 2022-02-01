export function map<I, O>(arr: I[], func: (arg: I) => O): O[] {
  return arr.map(func)
}
const arr = ['1', '2', '3']
const res = map(arr, (item) => {
  return parseInt(item)
})
