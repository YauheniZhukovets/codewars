function repeatStr (n, s) {
    var word = "";
    for(var i = 0; i <= n-1; i++) {
        word += s; 
    }  
    return word;
}

var runTest = repeatStr(6,"Q");
console.log(runTest);