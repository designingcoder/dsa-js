const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const mostDigits = (arr) => {
  let maxDigits = 0
  for(let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, Math.floor(Math.log10(Math.abs(arr[i]))) + 1)
  }
  return maxDigits
}

const radixSort = (arr) => {
  let maxDigitsCount = mostDigits(arr)
  
  for(let i = 0; i < maxDigitsCount; i++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for(let j = 0; j < arr.length; j++) {
      digitBuckets[getDigit(arr[j], i)].push(arr[j])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

const array = [23, 345, 5467, 12, 2345, 1, 0, 9852]

console.log(radixSort(array))
