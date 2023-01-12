function smallEnough(a, limit) {
    const filteredArr = a.filter(el => el <= limit)
    return filteredArr.length === a.length
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))