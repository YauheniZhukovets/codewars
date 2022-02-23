let arr = ['good', 'bad', 'bad', 'bad', 'bad']

function well(x) {
    result = x.filter( x => x === 'good')
    if (result.length === 1 || result.length === 2) {
        return 'Publish!'
    } if (result.length > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

console.log(well(arr))