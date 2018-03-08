export function filter(inputArray, filterFunc) {
  var inputArrayLength = inputArray.length
  var returnArray = []
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    var keep = filterFunc(currentElement)
    if(keep) {
      returnArray.push(currentElement)
    }
    currentIndex++
  }
  return returnArray
}

export function all(inputArray, predicateFn) {
  return inputArray
}
