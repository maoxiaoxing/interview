export interface ReadonlyPerson {
  readonly name: string;
  readonly age: number
}

export interface WritePerson {
  name: string;
  age: number;
}

let readPerson: ReadonlyPerson = {
  name: 'mxx',
  age: 18
}

let writePerson: WritePerson = {
  name: '毛',
  age: 20,
}

readPerson = writePerson
writePerson.age++
console.log(readPerson.age)
