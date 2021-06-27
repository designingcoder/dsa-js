const areSame = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}
/*
areSame has time complexity of O(n^2)
    n - for loop
        n - indexOf
*/

const areSameAlt = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
            return false
        }
    }
    return true
}
/*
areSameAlt has time complexity of O(3n) or O(n)
    n - for loop
    n - for loop
    n - for loop
*/

const arr1 = [1, 2, 3, 2]
const arr2 = [9, 1, 4, 4]

console.log(areSame(arr1, arr2))
console.log(areSameAlt(arr1, arr2))
