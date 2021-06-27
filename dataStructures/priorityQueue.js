class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

class PriorityQueue {
  constructor() {
    this.values = []
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority)
    this.values.push(newNode)
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1)/2)
      const parent = this.values[parentIndex]
      if(element.priority >= parent.priority) return
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  dequeue() {
    const topPriority = this.values[0]
    const end = this.values.pop()
    if(this.values.length > 0) {
      this.values[0] = end
      let index = 0
      const element = this.values[0]
      while(true) {
        const leftChildIndex = 2 * index + 1
        const rightChildIndex = 2 * index + 2
        let leftChild, rightChild
        let swapIndex = null
        if(leftChildIndex < this.values.length) {
          leftChild = this.values[leftChildIndex]
          if(leftChild.priority < element.priority) {
            swapIndex = leftChildIndex
          } 
        }
        if(rightChildIndex < this.values.length) {
          rightChild = this.values[rightChildIndex]
          if(
            (swapIndex === null && rightChild.priority < element.priority) ||
            (swapIndex !== null && rightChild.priority < leftChild.priority)
          ) {
            swapIndex = rightChildIndex
          }
        }
        if(swapIndex === null) break
        this.values[index] = this.values[swapIndex]
        this.values[swapIndex] = element
        index = swapIndex
      }
    }
    return topPriority
  }
}

const hospital = new PriorityQueue()
hospital.enqueue("glass in foot", 3)
hospital.enqueue("common cold", 5)
hospital.enqueue("high fever", 4)
hospital.enqueue("gunshot wound", 1)
hospital.enqueue("broken arm", 2)
hospital.enqueue("bleeding nose", 2)
console.log(hospital)
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
console.log(hospital.dequeue())
