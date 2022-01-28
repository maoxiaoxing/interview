function test03<T extends string>(arg: T[]) {

}
test03([1 as unknown as string])

export {}
