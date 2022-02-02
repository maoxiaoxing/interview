// 条件类型

interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

type NameOrId<T extends string | number> = T extends string ? NameLabel : IdLabel

function getLabel<T extends string | number> (s: T): NameOrId<T> {
  // const idLabel = {
  //   id: 123
  // }
  // const nameLabel: NameLabel = {
  //   name: 'Jack'
  // }
  // return idLabel
  throw ''
}

const id = getLabel(1)
console.log(id)
