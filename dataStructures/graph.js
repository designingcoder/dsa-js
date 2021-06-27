class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }
  addEdge(a, b) {
    if(this.adjacencyList[a].findIndex((e) => e === b) === -1) {
      this.adjacencyList[a].push(b)
      this.adjacencyList[b].push(a)
    }
  }
  removeEdge(a, b) {
    this.adjacencyList[a] = this.adjacencyList[a].filter((e) => e !== b)
    this.adjacencyList[b] = this.adjacencyList[a].filter((e) => e !== a)
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacenctVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacenctVertex)
    }
    delete this.adjacencyList[vertex]
  }
  dfsRecurssive(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList
    const dfs = (node) => {
      if(!node) return null
      visited[node] = true
      result.push(node)
      adjacencyList[node].forEach(neighbour => {
        if(!visited[neighbour]) {
          return dfs(neighbour)
        }
      });
    }
    dfs(start)
    return result
  }
  dfsItereative(start) {
    const stack = [start]
    const result = []
    const visited = {}
    visited[start] = true
    let currentNode
    visited[start] = true
    while (stack.length) {
      currentNode = stack.pop()
      result.push(currentNode)
      this.adjacencyList[currentNode].forEach(neighbour => {
        if(!visited[neighbour]) {
          visited[neighbour] = true
          stack.push(neighbour)
        }
      })
    }
    return result
  }
  bfs(start) {
    const queue = [start]
    const result = []
    const visited = {}
    visited[start] = true
    let currentNode
    while (queue.length) {
      currentNode = queue.shift()
      result.push(currentNode)
      this.adjacencyList[currentNode].forEach(neighbour => {
        if(!visited[neighbour]) {
          visited[neighbour] = true
          queue.push(neighbour)
        }
      })
    }
    return result
  }
}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
console.log(g)
console.log(g.dfsRecurssive("A"))
console.log(g.dfsItereative("A"))
console.log(g.bfs("A"))
