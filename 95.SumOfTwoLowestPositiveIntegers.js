function sumTwoSmallestNumbers(numbers) {
    const sortedNums = numbers.sort( (a, b) => a - b )
    return sortedNums[0] + sortedNums[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
