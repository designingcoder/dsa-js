/*
Binary Search works only on sorted array
Uses Divide and Conquer Approach
 */

const binarySearch = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start + end)/2)
    while(arr[mid] !== val && start <= end) {
        if(arr[mid] > val) end = mid -1
        else start = mid + 1
        mid = Math.floor((start + end)/2)
    }
    return arr[mid] === val ? mid : -1
}

const arr = [2, 3, 4, 6, 14, 15, 29, 30]
const val = 3

console.log(binarySearch(arr, val))
