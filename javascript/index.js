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
  var inputArrayLength = inputArray.length
  var returnArray = []
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    if(predicateFn(currentElement)) {
      returnArray.push(currentElement)
    }
    currentIndex++
  }
  if (returnArray.length === inputArrayLength) {
    return true
  } else {
    return false
  }
}

export function any(inputArray, predicateFn) {
  var inputArrayLength = inputArray.length
  var returnArray = []
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    if(predicateFn(currentElement)) {
      returnArray.push(currentElement)
    }
    currentIndex++
  }
  if(returnArray.length > 0) {
    return true
  } else {
    return false
  }
}

export function find(inputArray, predicateFn) {
  var inputArrayLength = inputArray.length
  var returnArray = []
  var currentIndex = 0
  while (currentIndex < inputArrayLength) {
    var currentElement = inputArray[currentIndex]
    if(predicateFn(currentElement)) {
      returnArray.push(currentElement)
      var bob = (!undefined) ? returnArray[0] : null
    }
    currentIndex++
  }
  console.log(bob)
  return bob
}
