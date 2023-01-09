function sumDigPow(a, b) {
    let arrResult = []

    for (a; a <= b; a++) {
        let arrNumbers = [a].join('').split('')

        let result = []

        arrNumbers.forEach((el, i) => {
            result.push(el ** (i + 1))
        })

        let sum = result.reduce((acc, el) => {
            return acc + el
        }, 0)

        if (a === sum) {
            arrResult.push(a)
        }
    }

    return arrResult
}

console.log(sumDigPow(50, 150))