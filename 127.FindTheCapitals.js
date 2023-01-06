const capitals = function (word) {
    const arr = word.split('')
    let resultArr = []
    arr.forEach((el, i) => {
        if (el === el.toUpperCase()) {
            resultArr.push(i)
        }
    })
    return resultArr
};


console.log(capitals('CodEWaRs'))