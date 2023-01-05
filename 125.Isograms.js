function isIsogram(str) {
    const arrStr = str.toLowerCase().split('')
    const uniqueArr = [...new Set(arrStr)]
    return str.length === uniqueArr.length
}

console.log(isIsogram('Dermatoglyphics'))