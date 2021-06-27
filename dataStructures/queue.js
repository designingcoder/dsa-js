class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  enqueue(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  dequeue() {
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

const list = new Queue()
list.enqueue(1)
list.enqueue(2)
list.enqueue(3)
list.enqueue(4)
list.dequeue()
console.log(list)
