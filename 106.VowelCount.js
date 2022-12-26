function getCount(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++
        }
        if (str[i] === 'e') {
            count++
        }
        if (str[i] === 'i') {
            count++
        }
        if (str[i] === 'o') {
            count++
        }
        if (str[i] === 'u') {
            count++
        }
    }
    return count
}

console.log(getCount('abracadabra'))