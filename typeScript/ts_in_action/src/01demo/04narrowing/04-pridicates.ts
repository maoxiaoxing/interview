// 类型谓词
export type Fish = {
  name: string,
  swim: () => void
}

export type Brid = {
  name: string,
  fly: () => void
}

function isFish (pet: Fish | Brid): pet is Fish {
  return (<Fish>pet).swim !== undefined
}

function getSmallPet(): Fish | Brid {
  const fish: Fish = {
    name: 'shark',
    swim: () => {}
  }
  const brid = {
    name: '喜鹊',
    fly: () => {}
  }
  return true ? fish : brid
}

const pet = getSmallPet()

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

const zoo: (Fish | Brid)[] = [getSmallPet(), getSmallPet(), getSmallPet()]
const underWater1 = zoo.filter(isFish)
const underWater2 = zoo.filter(isFish) as Fish[]
const underWater3 = zoo.filter((pet): pet is Fish => {
  if (pet.name === 'shark') {
    return true
  }
  return isFish(pet)
})

