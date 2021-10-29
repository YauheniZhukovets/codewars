function arrayPlusArray(arr1, arr2) {
    let num = 0;
    for (let i =0, k = 0; i < arr1.length && k < arr2.length; i++,k++) {
      num += arr1[i];
      num += arr2[k]
    }
    return num; //something went wrong
  }

  arrrr1 = [1, 2, 3];
  arrrr2 = [4, 5, 6];
  console.log(arrayPlusArray(arrrr1,arrrr2));