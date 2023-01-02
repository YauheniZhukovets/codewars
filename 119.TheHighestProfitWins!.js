function minMax(arr) {
    return arr.length > 1 ? [Math.min(...arr), Math.max(...arr)] : [arr[0], arr[0]]
}


console.log(minMax([1, 2, 3, 4, 5]))