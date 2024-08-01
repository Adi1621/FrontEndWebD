const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height"
    }

    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight"
    }

    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1)
        if (bmi < 18.6) {
            result.innerHTML = `<span>Your BMI is ${bmi} and you are underweight </span>`
        }
        if (bmi > 18.5 && bmi < 25) {
            result.innerHTML = `<span>Your BMI is ${bmi} and you it is normal</span>`
        }
        else {
            result.innerHTML = `<span>Your BMI is ${bmi} and you are overweight</span>`
        }
    }

})