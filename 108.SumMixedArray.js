function sumMix(x) {
    return x.reduce((acc, el) => {
        return acc + Number(el)
    }, 0)
}


console.log(sumMix([9, 3, '7', '3']))