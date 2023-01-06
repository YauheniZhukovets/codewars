function friend(friends) {
    let resulArr = []
    friends.forEach(el => {
        if (el.length === 4 && isNaN(Number(el))) {
            resulArr.push(el)
        }
    })
    return resulArr
}

console.log(friend(["Love", "Your", "Face", "1"]))