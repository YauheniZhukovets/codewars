function correct(string) {
    var out = [];
    for(var i = 0; i < string.length; i++) {  
      if (string[i] === " ") {
          out[i] = "*"; 
      } else {
          out[i] = string[i];
      }
    }   
    var end1 =[];
    for(var n = 0; n < out.length; n++)
        if (out[n] == 5) {
            end1[n] = "S";
        } else if (out[n] == 0) {
            end1[n] = "O";
        } else if (out[n] == 1) {
            end1[n] = "I";
        } else {
            end1[n] = out[n]
        }
    return end1.join("").replace(/[*]/g, " ");
}
 var strin = "IF-L0ND0N 51NGAP0RE";
 var end = correct(strin);
 console.log(end);