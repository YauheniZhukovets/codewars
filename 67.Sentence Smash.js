function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++)
        sum += arguments[i]
    return sum
}

console.log(sum(1, 4, 6, 8, 5, 4, 3, 6, 8))