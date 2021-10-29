class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next)
    this.prev = prev
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head
      if (index === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = this.head
          current.prev = node
          this.head = node          
        }
      } else if (index === this.count) {
        current = this.tail
        console.log(current)
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        const prev = this.getElementAt(index - 1)
        current = prev.next
        prev.next = node
        node.prev = prev
        current.prev = node
        node.next = current
      }
      this.count++
      return true
    }
    return false   
  }

  removeAt(index) {
    
  }
}