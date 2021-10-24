function reverseSeq(n) {
    var arr = [];
    for(var n = n; n >= 0; n--) {
        arr[n] = n
    }
    return arr.reverse().slice(0,n);
  };
var arrays = reverseSeq(6);
console.log(arrays);