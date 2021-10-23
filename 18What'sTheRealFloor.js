function getRealFloor(n) {
    if (n < 0 ) {
     return n = n
    } else if (n === 1) {
      return 0;
    } else if (n === 0) {
      return 0;  
    } else if (n ===15) {
      return 13
    } else if ( n >= 14 ) {
      return n - 2 ;
    } else if (n >= 2 || n <= 12) {
      return n - 1
    }
}