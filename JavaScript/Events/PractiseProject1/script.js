const start = document.querySelector('.start')
const stop = document.querySelector('.stop')


const randomColor = () => {
    const hex = '0123456789ABCDEF'
    let color = '#'                                    //for generating random color
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}


let startChange

start.addEventListener('click', (e) => {
    startChange = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000)
})

stop.addEventListener('click', (e) => {
    clearInterval(startChange)
    startChange = null
})


