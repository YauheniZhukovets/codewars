function roundToNext5(n) {
    let b = n % 5

    if (n === 0) {
        return 0
    }
    if (n > 0) {
        b && (n = n - b + 5)
        return n
    }
    if (n < 0) {
        b && (n = n - b)
        return n
    }
}

/*function roundToNext5(n){
    if (n % 5 === 0) {
        return n;
    }
    return roundToNext5(n + 1);
}*/

console.log(roundToNext5(-559358))