class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enquque(element) {
    this.items[this.count] = element
    this.count++
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }

    const res = this.items[this.lowestCount]
    Reflect.deleteProperty(this.items, this.lowestCount)
    this.lowestCount++
    return res
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let str = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount+1; i < this.count; i++) {
      str = `${str},${this.items[i]}`
    }
    return str
  }
}
