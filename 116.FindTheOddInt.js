function findOdd(A) {
    let uniqueArr = [...new Set(A)]
    let objCounter = {}
    let result = 0

    uniqueArr.forEach((el) => {
        objCounter[el] = 0
    })

    for (let i = 0; i < A.length; i++) {
        objCounter[A[i]] += 1
    }

    for (const el in objCounter) {
        if (objCounter[el] % 2 !== 0) {
            result = Number(el)
        }
    }

    return result
}


console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))