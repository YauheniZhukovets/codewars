function calculateYears(principal, interest, tax, desired) {
    let sum = principal
    let years = 0

    for (let i = 1; sum < desired; i++) {
        let profit = sum * interest
        let taxOnProfit = profit * tax
        sum = sum + (profit - taxOnProfit)
        years = i
    }

    return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))