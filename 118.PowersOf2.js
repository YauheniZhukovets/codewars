function powersOfTwo(n) {
    const arrNEl = new Array(n + 1).fill(2)
    return arrNEl.map((el, i) => el ** i)
}

console.log(powersOfTwo(4))