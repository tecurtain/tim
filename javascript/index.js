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
  var inversePredicate = (currentElement) => !predicateFn(currentElement)
  return !any(inputArray, inversePredicate)
}

export function any(inputArray, predicateFn) {
  var inputArrayLength = inputArray.length
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    if(predicateFn(currentElement)) {
      return true
    }
    currentIndex++
  }
  return false
}

export function find(inputArray, predicateFn) {
  var filterResult = filter(inputArray, predicateFn)
  if(filterResult.length == 0) {
    return null
  } else {
    return filterResult[0]
  }
}
