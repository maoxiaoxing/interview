export class Node {
  left
  right
  key
  constructor(key) {
    this.left = null
    this.right = null
    this.key = key
  }
}

export default class BinarySearchTree {
  root
  constructor() {
    this.root = null
  }

  insertNode(node, key) {
    if (!node) return null
    if (key > node.key) {
      // 目标 key 大于当前节点的 key 且 当前节点的右侧没有节点，则将 key 插入当前节点 右侧
      if (!node.right) {
        node.right = new Node(key)
      } else {
        // 否则递归插入
        this.insertNode(node.right, key)
      }
    } else {
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    }
  }

  preOrderTraverseNode(node, callback) {
    if (node) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  inOrderTraverseNode(node, callback) {
    if (node) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node)
      this.inOrderTraverseNode(node.right, callback)
    }
  }
}
