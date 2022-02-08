function aspectRatio(x,y){
    return [Math.ceil(y * 1.7777777777), y]
}

//
// function aspectRatio(x,y){
//     return [Math.ceil(y*16/9), y];
// }

console.log(aspectRatio(854,480))
