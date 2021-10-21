import { defaultEquals } from './util'
import { Node } from './linked-list-models'

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0
    this.head = undefined
    this.equalsFn = equalsFn
  }
}
