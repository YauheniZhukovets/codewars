// function mergeArrays(arr1, arr2) {
//     let arraySorted = arr1.concat(arr2).sort((a,b) => a-b )
//
//  return [...new Set(arraySorted)]
// }
//
// console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))


function mergeArrays1(arr1, arr2) {
    let arraySorted = arr1.concat(arr2).sort((a, b) => a - b)

    return arraySorted.filter((item, index) => {
        console.log(item,
            index,
            arraySorted.indexOf(item),
            arraySorted.indexOf(item) === index)
        return arraySorted.indexOf(item) === index
    })
}

console.log(mergeArrays1([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))