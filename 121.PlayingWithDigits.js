function digPow(n, p) {
    const arrNum = String(n).split('')
    const powArr = arrNum.map((el, i) => Number(el) ** (p + i))

    const sumPowArr = powArr.reduce((acc, el) => {
        return acc + el
    }, 0)

    const x = Math.pow(n,p);

    if (sumPowArr === x) {
        return p
    } else if (sumPowArr % n === 0) {
        return sumPowArr / n
    } else {
        return -1
    }
}

console.log(digPow(89, 1))