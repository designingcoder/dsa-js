class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }
  addNode(node) {
    if(!this.adjacencyList[node]) this.adjacencyList[node] = []
  }
  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({node: node2, weight})
    this.adjacencyList[node2].push({node: node1, weight})
  }
  dijkstraShortestPath(start, finish) {
    const nodes = new PriorityQueue()
    const distances = {}
    const previous = {}
    let path = []
    let nearestSource
    for(let node in this.adjacencyList) {
      if(node === start) {
        distances[node] = 0
        nodes.enqueue(node, 0)
      } else {
        distances[node] = Infinity
        nodes.enqueue(node, Infinity)
      }
      previous[node] = null
    }
    while(nodes.values.length) {
      nearestSource = nodes.dequeue().val
      if(nearestSource || distances[nearestSource] !== Infinity) {
        for(let neighbour in this.adjacencyList[nearestSource]) {
          let nextNode = this.adjacencyList[nearestSource][neighbour]
          let nextNeighbour = nextNode.node
          let newDistance = distances[nearestSource] + nextNode.weight
          if(newDistance < distances[nextNeighbour]) {
            distances[nextNeighbour] = newDistance
            previous[nextNeighbour] = nearestSource
            nodes.enqueue(nextNeighbour, newDistance)
          }
        }
      }
      if(nearestSource === finish) {
        while(previous[nearestSource]) {
          path.push(nearestSource)
          nearestSource = previous[nearestSource]
        }
        return path.concat(nearestSource).reverse()
      }
    }
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

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

const graph = new WeightedGraph()
graph.addNode("A")
graph.addNode("B")
graph.addNode("C")
graph.addNode("D")
graph.addNode("E")
graph.addNode("F")
graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)
console.log(graph)
console.log(graph.dijkstraShortestPath("A", "E"))
