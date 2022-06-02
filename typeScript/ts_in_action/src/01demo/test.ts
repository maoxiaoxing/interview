
export interface Animal {
  name: string
}

interface Dog extends Animal {
  eat: () => void
}

let a: Animal = {
  name: 'hh',
}

let dog: Dog = {
  name: 'oo',
  eat() {},
}

a = dog

type AnimalAction = (animal: Animal) => void
type DogAction = (dog: Dog) => void

let dogAction: DogAction = (dog: Dog) => {
  dog.eat()
}
let animalAction: AnimalAction = dogAction

