//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    arr.forEach((el) => {
        if (el === ':D' || el === ':)' || el === ';D' || el === ';)') {
            count += 1
        }
        if (el === ';-D' || el === ';-)' || el === ';~D' || el === ';~)') {
            count += 1
        }
        if ((el === ':-D' || el === ':-)' || el === ':~D' || el === ':~)')) {
            count += 1
        }
    })
    return count
}

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))