function betterThanAverage(classPoints, yourPoints) {
    let allPoint = 0;
    
    for(i=0; i<classPoints.length; i++) {
      allPoint += classPoints[i];
    }

    let midlePoint = allPoint/classPoints.length;
    
    if (yourPoints>midlePoint) {
        return true
    } else {
        return false
    }
}


let allPoints = [90, 40, 34, 57, 29, 72, 57, 88];
let MyPoint = 10;

let result = betterThanAverage(allPoints,MyPoint);
console.log(result);