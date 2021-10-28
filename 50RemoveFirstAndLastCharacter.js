function removeChar(str){
    let arr = [];
    for(let i = 0; i<str.length; i++) {
      arr[i] = str[i];
    }
    arr[0] = "";
    arr[str.length-1] = "";
  
   return arr.join("")
  };
  
  var st = 'eloquent'
console.log(removeChar(st));