/*
To find first pair of integers whose sum is 0
Assumptions:
Sorted Array
*/

const sumZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}
/*
n - for loop
    n - for loop

Time Complexity = O(n^2)
*/

const sumZeroAlt = (arr) => {
    let left = 0
    let right = arr.length - 1
    while(left < right) {
        let sum = arr[left] + arr[right]
        if(sum > 0) {
            right--
        } else if(sum < 0) {
            left++
        } else {
            return [arr[left], arr[right]]
        }
    }
}
/*
n - while loop

Time Complexity = O(n^2)
*/

const arr = [-4, -3, -2, 0, 1, 2]
console.log(sumZero(arr))
console.log(sumZeroAlt(arr))
