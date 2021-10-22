

function defaultEquals(a, b) {
  return a === b
}

class Node {
  constructor(element) {
    this.element = element
    this.next = undefined
  }
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }

  push(element) {
    let current
    const node = new Node(element)
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current.next
      } else {
        let prev
        for(let i = 0; i < index; i++) {
          prev = current
          current = current.next
        }

        prev.next = current.next
      }

      this.count--
      return current.element
    }

    return undefined
  }
}
