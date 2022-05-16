
export type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

interface Person {
  name: string;
  age: number
}

type LazyPerson = Getters<Person>
