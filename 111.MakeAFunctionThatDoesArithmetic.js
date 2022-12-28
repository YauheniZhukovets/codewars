function arithmetic(a, b, operator) {
    switch (operator) {
        case "add" : {
            return a + b
        }
        case "subtract" : {
            return a - b
        }
        case "multiply" : {
            return a * b
        }
        case "divide" : {
            return a / b
        }
    }
}

const arithmetic1 = (a, b, operator) => {
    const ops = {
        'add': a + b,
        'subtract': a - b,
        'multiply': a * b,
        'divide': a / b
    }

    return ops[operator]
}


console.log(arithmetic1(5, 2, "multiply"))
