function hello(name) {
    if (name ===undefined || name === "" ) {
        return "Hello, World!"
    } else {
        let firstChair = name.slice(0,1).toUpperCase()
        let nextChairs = name.slice(1).toLowerCase()
        return `Hello, ${firstChair}${nextChairs}!`
    }
}

console.log(hello('John'))