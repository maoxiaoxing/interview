export interface Animal {
  run: () => void
}

interface Person {
  name: string
}

interface Student extends Animal, Person {
  study: () => void
}

const student: Student = {
  name: 'mxx',
  run: () => {},
  study: () => {}
}
