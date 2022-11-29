function getDivisorsCnt(n) {
    const arr = []
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr.push(i)
        }
    }
    return arr.length
}


console.log(getDivisorsCnt(0))
