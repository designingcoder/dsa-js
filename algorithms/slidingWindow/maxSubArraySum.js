/*
Find the largest sum that can be produced by a sub-array of given length
*/
const maxSubArraySum = (arr, windowSize) => {
    if(windowSize > arr.length) {
        return null
    }
    let maxSum = -Infinity
    for(let i = 0; i < arr.length - windowSize + 1; i++) {
        tempSum = 0
        for(let j = 0; j < windowSize; j++) {
            tempSum += arr[i + j]
        }
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}
/*
n - for loop
    n - for loop

Time complexity is O(n^2)
*/

const maxSubArraySumAlt = (arr, windowSize) => {
    let maxSum = 0
    let tempSum = 0
    if(windowSize > arr.length) {
        return null
    }
    for(let i = 0; i < windowSize; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = windowSize; i < arr.length; i++) {
        tempSum = tempSum - arr[i-windowSize] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}
/*
n - for loop
n - for loop

Time complexity is O(2n) or O(n)
*/

const arr = [2, 6, 9, 2, 1, 8, 5, 6, 3]
const windowSize = 3

console.log(maxSubArraySum(arr, windowSize))
console.log(maxSubArraySumAlt(arr, windowSize))
