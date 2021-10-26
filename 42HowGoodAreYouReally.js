function betterThanAverage(classPoints, yourPoints) {
    let allPoint = 0;
    
    for(let i=0; i<classPoints.length; i++) {
      allPoint = allPoint + classPoints[i];
    }

    let midlePoint = allPoint/classPoints.length;
    
    if (yourPoints>midlePoint) {
        return true
    } else {
        return false
    }
}


let allPoints = [90, 40, 34, 57, 29, 72, 57, 88, 24, 24, 56, 78, 43, 88, 88, 99, 99, 99];
let MyPoint = 70;

let result = betterThanAverage(allPoints,MyPoint);
console.log(result);