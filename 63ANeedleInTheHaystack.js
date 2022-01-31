let array = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

/*
function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`
        }
    }
}
*/

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

console.log(findNeedle(array))