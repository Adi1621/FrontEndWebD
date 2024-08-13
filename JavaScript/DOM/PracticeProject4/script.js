const num = Math.floor((Math.random() * 10 + 1))

const form = document.querySelector('.form')
const result = document.querySelector('.result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const guess = parseInt(document.querySelector('#guess').value)
    check(guess)
})


console.log(num);

let check = (guess) => {
    if (isNaN(guess) || guess < 1 || guess > 10) {
        result.innerHTML = "Please enter a valid number"
    }
    else {
        if (guess === num) {
            result.innerHTML = "Right guess"
        }
        else {
            result.innerHTML = "Wrong guess! Try again"
        }
    }
}





