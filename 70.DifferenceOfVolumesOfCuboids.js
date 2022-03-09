let arr1 = [2, 2, 3]
let arr2 = [5, 4, 1]

function findDifference(a, b) {
    return Math.abs(a.reduce((sum, current)=> sum * current) - b.reduce((sum, current) => sum  * current ))
}

console.log(findDifference(arr1,arr2))