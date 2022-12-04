function printerError(s) {
    const arrS = s.split('')
    const sortedArrS = arrS.sort()
    const reversedArrS = sortedArrS.reverse()
    let countErrors = 0

    for (let i = 0; reversedArrS[i] !== 'm'; i++) {
        countErrors++
    }

    return `${countErrors}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))
