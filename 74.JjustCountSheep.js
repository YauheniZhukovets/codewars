let countSheep = function (num){
    if(num < 1) {
        return ''
    } else {
        let string = ''
        for (let i = 1; i < num + 1; i++) {
            string += `${i} sheep...`
        }
        return string
    }
}

console.log(countSheep(3))