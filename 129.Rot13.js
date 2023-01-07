function rot13(message) {
    const messageArr = message.split('')
    const massageArrLowerCase = messageArr.map(el => el.toLowerCase())
    const changeLiter = massageArrLowerCase.map((el) => {
        let elCode =  el.charCodeAt(0)

        if (elCode <= 109) {
            return String.fromCharCode(elCode + 13)
        }

        if (elCode > 109) {
            let a = 123 - elCode
            let b = 13 - a
            let c = 97 + b
            return String.fromCharCode(c)
        }
    })

    messageArr.forEach((el,i) => {
        if(el === el.toUpperCase()) {
            changeLiter[i] = changeLiter[i].toUpperCase()
        }
    })

    return changeLiter.join('')
}

console.log(rot13("Test"))