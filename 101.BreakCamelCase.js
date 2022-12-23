/*function solution(string) {
    let changeString = string
    for(let i = 0; i < string.length; i++) {
        if(string[i] === string[i].toUpperCase()) {
            let upperLiter = string[i]
            changeString = changeString.replaceAll(upperLiter, ` ${upperLiter}`)
        }
    }
    return changeString.replace(/ +/g, ' ')
}*/

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

console.log(solution("pointDayDoTime"))
