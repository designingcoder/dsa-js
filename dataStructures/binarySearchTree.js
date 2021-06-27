class Node {
  constructor(val) {
    this.value = val
    this.left = this.left
    this.right = this.right
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    const newNode = new Node(val)
    if(!this.root) {
      this.root = newNode
      return this
    }
    let curr = this.root
    while(true) {
      if(curr.value === val) return this
      if(curr.value > val) {
        if(!curr.left) {
          curr.left = newNode
          return this
        }
        curr = curr.left
      } else {
        if(!curr.right) {
          curr.right = newNode
          return this
        }
        curr = curr.right
      }
    }
  }
  isNode(val) {
    if(!this.root) return false
    let curr = this.root
    while (curr) {
      if(curr.value > val) curr = curr.left
      else if(curr.value < val) curr = curr.right
      else return true
    }
    return false
  }
  get(val) {
    if(!this.root) return undefined
    let curr = this.root
    while (curr) {
      if(curr.value > val) curr = curr.left
      else if(curr.value < val) curr = curr.right
      else return curr
    }
    return undefined
  }
  BFS() {
    if(!this.root) return undefined
    let curr = this.root
    const data = [], queue = []
    queue.push(curr)
    while (queue.length) {
      curr = queue.shift()
      data.push(curr.value)
      if(curr.left) queue.push(curr.left)
      if(curr.right) queue.push(curr.right)
    }
    return data
  }
  DFSPreOrder() {
    if(!this.root) return undefined
    const data = []
    const traverse = (node) => {
      data.push(node.value)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    if(!this.root) return undefined
    const data = []
    const traverse = (node) => {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  DFSInOrder() {
    if(!this.root) return undefined
    const data = []
    const traverse = (node) => {
      if(node.left) traverse(node.left)
      data.push(node.value)
      if(node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log("tree: ", tree)
console.log("tree.BFS: ", tree.BFS())
console.log("tree.DFSPreOrder: ", tree.DFSPreOrder())
console.log("tree.DFSPostOrder: ", tree.DFSPostOrder())
console.log("tree.DFSInOrder: ", tree.DFSInOrder())
