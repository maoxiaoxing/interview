class Deque {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }

    const res = this.items[this.lowestCount]
    Reflect.deleteProperty(this.items, this.lowestCount)
    this.lowestCount++
    return res
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.lowestCount]
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.items[this.count]
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for(let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i-1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }
    this.count--
    const res = this.items[this.count]
    Reflect.deleteProperty(this.items, this.count)
    return res
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
