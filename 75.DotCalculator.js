function dotCalculator (equation) {
    let resultNum = 0
    let resultDot = []

    let beforeDot = 0
    for (let i = 0; equation[i] === '.';  i++)    {
        beforeDot += 1
    }
    let afterDot = 0
    for (let i = equation.length - 1; equation[i] === '.';  i--)    {
        afterDot += 1
    }
    let sign
    for (let i = 0; equation[i] === '.';  i++)    {
         sign = equation[i+2]
    }
    if(sign === '+'){
        resultNum =  beforeDot + afterDot
    } else if (sign === '-'){
        resultNum =  beforeDot - afterDot
    } else if (sign === '*') {
        resultNum = beforeDot * afterDot
    } else if (sign === '/' && beforeDot > afterDot) {
        resultNum = Math.trunc(beforeDot / afterDot)
    } else {
       return ''
    }
    for (let i = 0; i < resultNum; i++) {
        resultDot.push('.')
    }
    return resultDot.join('')
}

console.log(dotCalculator("....... // .."))