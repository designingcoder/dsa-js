class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
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
      this.tail = newNode
    }
    this.length++
    return newNode
  }
  pop() {
    if(!this.head) return undefined
    let curr = this.head
    let preTail = curr
    while(curr.next) {
      preTail = curr
      curr = curr.next
    }
    this.tail = preTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.head =null
    }
    return curr
  }
  shift() {
    if(!this.head) return undefined
    const curr = this.head
    this.head = curr.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    return curr
  }
  unshift(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return newNode
  }
  get(index) {
    if(index < 0 || index >= this.length) return undefined
    let count = 0
    let curr = this.head
    while(count !== index) {
      curr = curr.next
      count++
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
    const newNode = new Node(val)
    const prev = this.get(index - 1)
    const temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return newNode
  }
  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()
    const prevNode = this.get(index - 1)
    const removedNode = prevNode.next
    prevNode.next = removedNode.next
    this.length--
    return removedNode
  }
  reverse() {
    let curr = this.head
    this.head = this.tail
    this.tail = curr
    let prev = null
    let next = null
    for(let i = 0; i < this.length; i++) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return this
  }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
console.log(list)
console.log(list.reverse())
console.log(list)
