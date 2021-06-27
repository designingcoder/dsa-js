class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return newNode
  }
  pop() {
    if(!this.head) return undefined
    const poppedNode = this.tail
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if(!this.head) return undefined
    const shiftedNode = this.head
    if(this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shiftedNode.next
      this.head.prev = null
      shiftedNode.next = null
    }
    this.length--
    return shiftedNode
  }
  unshift(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode = this.head
      this.head = newNode
    }
    this.length++
    return newNode
  }
  get(index) {
    if(index < 0 || index >= this.length) return undefined
    let count, curr
    if(index <= this.length/2) {
      count = 0
      curr = this.head
      while(count != index) {
        curr = curr.next
        count++
      }
    } else {
      count = this.length - 1
      curr = this.tail
      while(count != index) {
        curr = curr.prev
        count--
      }
    }
    return curr
  }
  set(index, val) {
    const foundNode = this.get(index)
    if(!foundNode) return undefined
    foundNode.val = val
    return foundNode
  }
  insert(index, val) {
    if(index < 0 || index > this.length) return undefined
    if(index === this.length) return this.push(val)
    if(index === 0) return this.unshift(val)
    let newNode = new Node(val)
    let prevNode = this.get(index -1)
    let nextNode = prevNode.next
    prevNode.next = newNode
    newNode.prev = prevNode
    newNode.next = nextNode
    nextNode.prev = newNode
    this.length++
    return newNode
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()
    let removedNode = this.get(index)
    let prevNode = removedNode.prev
    let nextNode = removedNode.next
    prevNode.next = nextNode
    nextNode.prev = prevNode
    removedNode.prev = null
    removedNode.next = null
    this.length--
    return removedNode
  }
  reverse() {
    if(!this.head) return undefined
    if(this.length === 1) return this
    let node = this.head
    this.head = this.tail
    let counter = 0
    let prev = null
    let next
    while (counter < this.length) {
      next = node.next
      node.prev = next
      node.next = prev
      prev = node
      node = next
      counter++
    }
    return this
  }
}

const list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
console.log(list.reverse())