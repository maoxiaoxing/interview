export interface MyWindow {
  name: string
}

export interface MyWindow {
  count: number
}

interface Animal {
  name: string
}

interface Dog extends Animal {
  age: number
}

const dog: Dog = {
  name: '',
  age: 1
}

const w: MyWindow = {
  count: 1,
  name: ''
}

type Type = {
  name: string
}

type MyType = Type & {
  count: number
}

const myType: MyType = {
  name: '',
  count: 1,
}


