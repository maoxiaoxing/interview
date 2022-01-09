
interface Length {
  length: number;
}

function getLength<T extends Length>(arg: T) {
  return arg.length
}

function test01<T>(arg: T[]) {

}

test01<string | number>(['1', '2', 3])

function test02<T extends string | number>(arg: T[]) {
  return arg.toString()
}

test02([1, '3'])

function test03<T extends string>(arg: T[]) {

}
test03([1 as unknown as string])

