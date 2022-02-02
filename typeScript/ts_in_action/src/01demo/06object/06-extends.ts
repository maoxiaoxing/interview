export interface Animal {
  run: () => void
}

interface Person {
  name: string
}

interface Student extends Animal, Person {
  study: () => void
}

type Teacher = Animal & Person

const student: Student = {
  name: 'mxx',
  run: () => {},
  study: () => {}
}

const teacher: Teacher = {
  name: 'mxx',
  run: () => {},
}
