const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        //    if(e.target.id === 'grey'){
        //     body.style.background = 'grey'
        //    } 
        //    if(e.target.id === 'white'){
        //     body.style.background = 'white'
        //    } 
        //    if(e.target.id === 'blue'){
        //     body.style.background = 'blue'
        //    } 
        //    if(e.target.id === 'yellow'){
        //     body.style.background = 'yellow'
        //    } 

        body.style.background = e.target.id
    })
})

