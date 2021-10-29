function century(year) {
    var x = Math.floor(year / 100);
    if (year % 100 === 0)
        return x;
    else
        return x + 1;
    
}




let year = 140
console.log(century(year));