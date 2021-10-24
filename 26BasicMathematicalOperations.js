function basicOp(operation, value1, value2) {
if(operation === "-") {
 return value1 - value2;
} else if (operation === "+") {
    return value1 + value2;
} else if (operation === "*") {
    return value1 * value2;
} else if (operation === "/") {
    return value1 / value2;
}
 
}
console.log(basicOp("*", 11,8));