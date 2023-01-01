function highAndLow(numbers) {
    const arr = numbers.split(' ')
    const sortedArr = arr.sort((a, b) => a - b)
    return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`
}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))