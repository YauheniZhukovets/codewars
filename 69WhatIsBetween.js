function between(a, b) {
    let arr = []
    if (a < b) {
        for (a; a <= b; a++) {
            arr.push(a)
        }
    } else {
        return
    }
    return arr
}

console.log(between(15, 20))