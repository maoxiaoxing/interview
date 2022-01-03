const bool: boolean = true
const num: number = 123
const str: string = 'abc'

const arr: number[] = [1, 2, 3]
const arr1: Array<number | string> = [1, 2, '3']

const tuple: [number, string] = [0, '1']

const add = (a: number, b: number) => a + b
const compute: (a: number, b: number) => number = (a, b) => a + b

const obj: object = {
  name: 'mxx'
}

const s1: symbol = Symbol()

const um: undefined = undefined
const nu: null = null

const noReturn: () => void = () => {}

const error = () => {
  throw new Error('error')
}

