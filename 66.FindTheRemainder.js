function remainder(n, m) {
    if (n > m) {
        return n - Math.floor(n / m) * m
    }
    if (m > n) {
        return m - Math.floor(m / n) * n
    }
    if (m === 0 || n === 0) {
        return NaN
    }
    if (n < 0 && m <0) {
        return n - m
    }
    if (n < 0 && m > n && m !== 0) {
        return m/n
    }
    if (m < 0 && n > m && n !== 0) {
        return n/m
    }
}

console.log(remainder(381, -910))