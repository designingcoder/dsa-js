class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
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
      const temp = this.head
      this.head = newNode
      this.head.next = temp
    }
    this.length++
    return this
  }
  pop() {
    if(!this.head) return undefined
    const temp = this.head
    if(this.length === 1 ){
      this.head = null
      this.tail = null
    }
    this.head = this.head.next
    this.length--
    return temp.val
  }
}

const list = new Stack()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.pop()
console.log(list)
