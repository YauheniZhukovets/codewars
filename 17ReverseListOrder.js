function reverseList(list) {
    var temp = [];

    for(var i=0,j = list.length - 1 ; j > -1; i++,j--) {
    temp[i] = list[j];
    }   
    return temp;
};

