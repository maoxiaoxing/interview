// 索引类型

export interface Person {
  name: string;
  age: number;
}

type K = Person['name' | 'age']
type K1 = Person[keyof Person]

const arr = [
  {name: 'Bob', age: 18},
  {name: 'Jack', age: 19},
]

type Per = typeof arr[number]

const per1: Per = {
  name: 'Ben',
  age: 17
}

const str = 'name'
type Str = Person[typeof str]

