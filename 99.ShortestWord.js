function findShort(s) {
    const arr = s.split(' ')
    const sortedArr = arr.sort((a, b) => a.length - b.length)
    return sortedArr[0].length
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'))