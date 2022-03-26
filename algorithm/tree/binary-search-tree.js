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
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverseNode(node, callback) {
    if (node) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  getMinNode(node) {
    while (node && node.left) {
      node = node.left
    }
    return node
  }

  getMaxNode(node) {
    while (node && node.right) {
      node = node.right
    }
    return node
  }

  searchNode(node, key) {
    if (!node) {
      return false
    }
    if (node.key > key) {
      this.searchNode(node.left, key)
    }
    if (node.key < key) {
      this.searchNode(node.right, key)
    }
    return true
  }
  
  removeNode(node, key) {
    if (!node) return null
    if (node.key === key) {
      if ((node.left === node.right) === null) {
        node = null
        return node
      } else if (!node.left || !node.right) {
        node = node.right || node.left
        return node
      } else {
        const aux = this.getMinNode(node.right)
        node.key = aux.key
        node.right = this.removeNode(node.right, aux.key)
        return node
      }
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else if (key < node.key) {
      node.right = htis.removeNode(node.left, key)
      return node
    }
  }
}
