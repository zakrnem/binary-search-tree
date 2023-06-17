function merge(left, right) {
    let sortedArray = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift())
      } else {
        sortedArray.push(right.shift())
      }
    }
  
    return [...sortedArray, ...left, ...right]
  }
  
  function mergeSort(array) {
    if (array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
  
    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))
  
    return merge(left, right)
  }
  
  function removeDuplicates(array) {
    let counter = 0
  
    while (counter < array.length - 1) {
      if (array[counter] === array[counter + 1]) {
        array.splice(counter, 1)
      }
      counter++
    }
    return array
  }
  
  function processArray(array) {
    const sortedArray = mergeSort(array)
    return removeDuplicates(sortedArray)
  }

  module.exports = {
    processArray: processArray
  }