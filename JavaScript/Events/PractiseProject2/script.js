const display = document.querySelector('.display')

window.addEventListener('keydown', (e) => {
    display.innerHTML = `You are pressing ${e.key} key`
})