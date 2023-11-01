let userGN = document.querySelector('.main__input-wraper-input--gn')
let buttonGN = document.querySelector('.main__input-wraper-btn--gn')
let resultGN = document.querySelector('.main__success--gn')

let computer = Math.floor(Math.random() * 10)

buttonGN.addEventListener('click', () => {
    if (userGN.value == computer) {
        resultGN.style.color = '#039900'
        resultGN.textContent = `Ви вгадали число ${computer}`
    }
    else {
        resultGN.style.color = '#990000'
        resultGN.textContent = `Ви програли, комп’ютер загадав ${computer}`
    }
})
