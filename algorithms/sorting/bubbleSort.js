const bubbleSort = (arr) => {
    let noSwaps
    for(let i = 0; i < arr.length; i++) {
        noSwaps = true
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                noSwaps = false}
            }
        if(noSwaps) return arr
    }
    return arr
}

const arr  = [36, 37, 41, 39]

console.log(bubbleSort(arr))
