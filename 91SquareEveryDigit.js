function squareDigits(num) {
    const arrNums = String(num).split('')
    const squareArr = arrNums.map(e => Number(e) ** 2)
    return Number(squareArr.join(''))
 }

console.log(squareDigits(3212))


