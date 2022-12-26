function twoSort(s) {
    let sortedArr = s.sort()
    let firstItem = sortedArr[0]
    let firstWordArr = firstItem.split('')
    return firstWordArr.join('***')
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))