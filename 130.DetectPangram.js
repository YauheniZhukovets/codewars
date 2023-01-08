function isPangram(string) {
    const strWithoutSpace = string.replace(/[^a-z]/ig, "").toLowerCase()
    const arr = strWithoutSpace.split('')
    const arrUnique = [...new Set(arr)]
    return arrUnique.length === 26
}


console.log(isPangram("AbCdEfGhIjKlM zYxWvUtSrQpOn"))