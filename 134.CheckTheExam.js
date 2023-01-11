function checkExam(array1, array2) {
    let result = 0

    for (let i = 0; i < array1.length; i++) {
        if (array2[i] === array1[i]) {
            result += 4
        } else if (array2[i] === '') {
            result += 0
        } else {
            result -= 1
        }
    }
    return result < 0 ? 0 : result
}


console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]))