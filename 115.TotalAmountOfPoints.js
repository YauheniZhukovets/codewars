function points(games) {
    return games.reduce((acc, el) => {
        let arr = el.split(':')
        if (Number(arr[0]) > Number(arr[1])) {
            return acc + 3
        }
        if (Number(arr[0]) === Number(arr[1])) {
            return acc + 1
        }
        if (Number(arr[0]) < Number(arr[1])) {
            return acc
        }

    }, 0)
}

console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]))