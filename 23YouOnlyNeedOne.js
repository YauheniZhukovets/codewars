var a = [1,44,66];
var x = 123;


function check(a, x) {
    for(i = 0; i < a.length; i++) {
      if(a[i] == x) {
        return true;
      }
    }
    return false;
}
var result = check(a,x);
console.log(result);