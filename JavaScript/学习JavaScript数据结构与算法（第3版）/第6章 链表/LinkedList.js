import { defaultEquals } from './util'
import { Node } from './linked-list-models'

export default class LinkedList {
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
}
