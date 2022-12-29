function zero(arg) {
    if (typeof arg === 'function') {
        return arg(0)
    } else {
        return 0
    }
}
function one(arg) {
    if (typeof arg === 'function') {
        return arg(1)
    } else {
        return 1
    }
}
function two(arg) {
    if (typeof arg === 'function') {
        return arg(2)
    } else {
        return 2
    }
}
function three(arg) {
    if (typeof arg === 'function') {
        return arg(3)
    } else {
        return 3
    }
}
function four(arg) {
    if (typeof arg === 'function') {
        return arg(4)
    } else {
        return 4
    }
}
function five(arg) {
    if (typeof arg === 'function') {
        return arg(5)
    } else {
        return 5
    }}
function six(arg) {
    if (typeof arg === 'function') {
        return arg(6)
    } else {
        return 6
    }
}
function seven(arg) {
    if (typeof arg === 'function') {
        return arg(7)
    } else {
        return 7
    }
}
function eight(arg) {
    if (typeof arg === 'function') {
        return arg(8)
    } else {
        return 8
    }}
function nine(arg) {
    if (typeof arg === 'function') {
        return arg(9)
    } else {
        return 9
    }
}

function plus(arg) {
    return function (a) {
        return a + arg
    }
}
function minus(arg) {
    return function (a) {
        return a - arg
    }
}
function times(arg) {
    return function (a) {
        return a * arg
    }
}
function dividedBy(arg) {
    return function (a) {
        return a / arg
    }
}

console.log(seven(times(five())))