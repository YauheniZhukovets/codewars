function positiveSum(arr) {
    
    var sum = 0;
    
    if(arr.length==0){
       return 0
       }
      
    for (i = 0; i < arr.length; i++) {
         if (arr[i] >= 0) {
          sum += arr[i];
          } 
      }
      return sum;
      
  }