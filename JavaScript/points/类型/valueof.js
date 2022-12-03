const a = {
  i: 1,
  valueOf() {
    return this.i++
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log('inner')
}


const obj = {
  valueOf() {
    return []
  },
  toString() {
    return 100
  }
}

console.log(Number(obj))
console.log(String(obj))
