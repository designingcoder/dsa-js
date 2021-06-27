const linearSearch = (arr, val) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] ===  val) return i
    }
    return -1
}

const arr =  [0, 1, 2, 3, 9, 8, 7, 6, 5]
const val = 9

console.log(linearSearch(arr, val))
