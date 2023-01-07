function reverseLetter(str) {
    let reg = /[^А-яЁёA-Za-z]/g
    return str.replace(reg, '').split('').reverse().join('')
}


console.log(reverseLetter("r!cu4yn^bv nx5lma&qk7]r/"))