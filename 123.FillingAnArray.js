const arr = (N) => {
    const arr = [...Array(N)]

    if (!N) {
        return []
    }
    if (N > 0) {
        return arr.map((el, i) => i)
    }
}


console.log(arr())