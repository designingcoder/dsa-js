const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) lowest = j
        }
        if(i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
    return arr
}

const arr = [0, 2, 24, 22, 10, 19, 17]

console.log(selectionSort(arr))
