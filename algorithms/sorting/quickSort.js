const quickSort = (arr) => {
  if (arr.length <= 0) return arr
  const pivot = arr[Math.floor(arr.length / 2)]
  const leftArr = []
  const rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i != Math.floor(arr.length / 2)) {
      arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(pivot).concat(quickSort(rightArr))
}

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,]

console.log(quickSort(array))
