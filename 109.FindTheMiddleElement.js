function gimme (triplet) {
    const copyTriplet = [...triplet]
    const sortedArr = copyTriplet.sort((a, b) => a - b)
    return triplet.indexOf(sortedArr[1])
}

console.log(gimme([2, 3, 1]))