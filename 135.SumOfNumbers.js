function getSum(a, b) {
    let arr = []
    if (a < b) {
        for (let i = a; i <= b; i++) {
            arr.push(i)
        }
    } else {
        for (let i = b; i <= a; i++) {
            arr.push(i)
        }
    }


    return arr.reduce((acc, el) => {
        return acc + el
    }, 0)
}

console.log(getSum(0, -1))