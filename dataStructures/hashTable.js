class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(53)
  }
  _hash(key) {
    let total = 0
    let primeKey = 31
    for(let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * primeKey + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    if(!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
    return index 
  }
  get(key) {
    let index = this._hash(key)
    if(this.keyMap[index]) {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
  }
  remove(key) {
    let index = this._hash(key)
    let temp
    if(this.keyMap[index] == undefined) {
      return undefined
    } else if(this.keyMap[index].length === 1) {
      temp = this.keyMap.splice(index, 1)[0]
    } else {
      for(let i = 0; i < this.keyMap[index].length; i++) {
        if(this.keyMap[index][i][0] === key) {
          temp = this.keyMap[index].splice(i, 1)
        }
      }
    }
    return {key: temp[0][0], value: temp[0][1]}
  }
  keys() {
    let keysArr = new Set()
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.add(this.keyMap[i][j][0])
        }
      }
    }
    keysArr = [...keysArr]
    return keysArr
  }
  values() {
    let valuesArr = new Set()
    for(let i = 0; i < this.keyMap.length; i++) {
      if(this.keyMap[i]) {
        for(let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.add(this.keyMap[i][j][1])
        }
      }
    }
    valuesArr = [...valuesArr]
    return valuesArr
  }
}

const ht = new HashTable()

ht.set("black", "#000000")
ht.set("maroon", "#800000")
ht.set("yellow", "#ffff00")
ht.set("olive", "#808000")
ht.set("salmon", "#fa8072")
ht.set("lightcoral", "#f08080")
ht.set("mediumvioletred", "#c71585")
ht.set("plum", "#dda0dd")
ht.set("white", "#ffffff")
console.log(ht.remove("maroon"))
console.log(ht.keys())
console.log(ht.values())
console.log(ht)
