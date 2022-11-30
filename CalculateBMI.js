function bmi(weight, height) {
    const bmi = weight / height ** 2
    if (bmi <= 18.5) {
        return 'Underweight'
    }
    if (bmi > 18.5 && bmi < 25) {
        return 'Normal'
    }
    if (bmi > 25 && bmi < 30.0) {
        return 'Overweight'
    } else return 'Obese'
}

console.log(bmi(80, 1.80))


const bmiSwitch = (w, h) => {
    const bmi = w / (h * h)

    switch (true) {
        case bmi <= 18.5:
            return 'Underweight'
        case  bmi <= 25.0:
            return 'Normal'
        case bmi <= 30.0:
            return 'Overweight'
        case bmi > 30:
            return 'Obese'
    }
}

console.log(bmiSwitch(80, 1.80))
