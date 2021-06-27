/*
Find unique values in an sorted array
Assumptions:
Array is sorted
1st element is unique
last element is unique
*/

const countUniqueValues = (arr) => {
    if(arr.length === 0) {
        return 0
    }
    let i =0
    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

arr = [1, 2, 3, 3, 4, 5, 6, 6, 7]
console.log(countUniqueValues(arr))
