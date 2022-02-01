/*function pillars(num_pill, dist, width) {
     let distance =  dist * 100
    if (num_pill > 2) {
        let widthPills = (num_pill - 2) * width
        return (num_pill-1) * distance + widthPills
    } else if (num_pill === 2) {
        return distance
    } else return 0
}*/

console.log(pillars(11,15,30))


function pillars(num_pill, dist, width) {
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
}