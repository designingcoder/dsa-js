const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++) {
        let curr = arr[i]
        for(var j = i-1; j >= 0 && arr[j] > curr; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = curr
    }
    return arr
}

const arr = [2, 1, 9, 76, 4]

console.log(insertionSort(arr))
