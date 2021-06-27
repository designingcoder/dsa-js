class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(ele) {
    this.values.push(ele)
    let index = this.values.length - 1
    const element = this.values[index]
    while (index > 0) {
      const parentIndex = Math.floor((index - 1)/2)
      const parent = this.values[parentIndex]
      if(element <= parent) return
      this.values[parentIndex] = element
      this.values[index] = parent
      index = parentIndex
    }
  }
  extractMax() {
    const max = this.values[0]
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
          if(leftChild > element) {
            swapIndex = leftChildIndex
          } 
        }
        if(rightChildIndex < this.values.length) {
          rightChild = this.values[rightChildIndex]
          if(
            (swapIndex === null && rightChild > element) ||
            (swapIndex !== null && rightChild > leftChild)
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
    return max
  }
}

const heap = new MaxBinaryHeap()
heap.insert(12)
heap.insert(27)
heap.insert(18)
heap.insert(33)
heap.insert(39)
heap.insert(41)
console.log(heap)
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())