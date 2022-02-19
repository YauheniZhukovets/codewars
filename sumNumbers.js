//Сумма введённых чисел
const sumInput = () => {
    let number = []
    while (true) {
        let value = prompt('Введите число', 0)
        if (value === '' || value === null || !isFinite(value)) {
            break
        }
        number.push(+value)
    }
    let sum = 0
    for (let i = 0; i < number.length; i++) {
        sum += number[i]
    }
    alert(sum)
}