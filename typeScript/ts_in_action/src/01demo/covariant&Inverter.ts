
class Animal {
  doAnimalThing(): void {}
}

class Dog extends Animal {
  doDongThing(): void {}
}

class Cat extends Animal {
  doCatThing(): void {}
}

function makeAnimalAciton(animalAction: (animal: Animal) => void):void {
  let cat: Cat = new Cat()
  animalAction(cat)
}

type AnimalAction = (animal: Animal) => void
type DogAction = (dog: Dog) => void

let dogAction: DogAction = (dog: Dog) => {
  dog.doDongThing()
}

let animalAction: AnimalAction = dogAction

makeAnimalAciton(animalAction)


















export {}

