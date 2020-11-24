const arr = [8, 19, 10, 2, 6, 12, 3, 4, 9, 5]

const quickSort = function(array) {
  if (array.length < 2) {
    return array
  }

  const left = []
  const right = []
  const point = array[0]

  for(const item of array) {
    if (item < point) {
      left.push(item)
    }
    if (item > point) {
      right.push(item)
    }
  }
  return quickSort(left).concat(point, quickSort(right))
}

const res = quickSort(arr)
console.log(res)