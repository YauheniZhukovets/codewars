//1
function DNAStrand(dna) {
    const arr = dna.split('')
    const newArr = arr.map((el) => el === 'A' ? 'T' : el === "T" ? 'A' : el === 'C' ? 'G' : el === 'G' ? 'C' : el)
    return newArr.join('')
}


console.log(DNAStrand("ATTGC"))


//2
const complements = {
    'T': 'A',
    'A': 'T',
    'C': 'G',
    'G': 'C',
}

const dnaStrand = (dna) => {
    const arr = dna.split('')
    const changedDna = arr.map((el) => complements[el])
    return changedDna.join('')
}

console.log(dnaStrand("ATTGC"))
