export const b: bigint = BigInt(100)

const b1: bigint = 100n

const s1: symbol = Symbol(1)
const s2: symbol = Symbol(1)

if (s1 === s2) {
  console.log('=')
}

