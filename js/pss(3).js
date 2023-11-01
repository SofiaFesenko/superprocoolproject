let resultWindow = document.querySelectorAll('.main__PSS-result')
let resultPSS = document.querySelector('.main__success--pss')
let userButtons = document.querySelectorAll('.main__btn--pss')
let compResult = document.querySelectorAll('.main__btn--computer')

let computer_choice

let choices = ['stone', 'scissors', 'paper']

let userCount = 0
let computerCount = 0

resultWindow[1].textContent = `Комп’ютер - ${computerCount}`
resultWindow[2].textContent = `Ви - ${userCount}`

function youWin() {
    resultPSS.textContent = 'Ви виграли раунд!'
    resultPSS.style.color = '#039900'
    userCount++
    resultWindow[2].textContent = `Ви - ${userCount}`
    compResult.textContent = choices[computer_choice]
}

function compWin() {
    resultPSS.textContent = 'Комп’ютер виграв раунд!'
    resultPSS.style.color = '#990000'
    computerCount++
    resultWindow[1].textContent = `Комп’ютер - ${computerCount}`
    compResult.textContent = choices[computer_choice]
}

function niczyja() {
    resultPSS.textContent = 'Нічия!'
    resultPSS.style.color = '#899499'
    compResult.textContent = choices[computer_choice]
}

// 

userButtons[0].addEventListener('click', () => {
    computer_choice = Math.floor(Math.random() * 3)

    if (choices[computer_choice] == 'stone') {
        niczyja()
    }
    else if (choices[computer_choice] == 'scissors') {
        youWin()

    }
    else if (choices[computer_choice] == 'paper') {
        compWin()
    }
})

userButtons[1].addEventListener('click', () => {
    computer_choice = Math.floor(Math.random() * 3)

    if (choices[computer_choice] == 'stone') {
        compWin()
    }
    else if (choices[computer_choice] == 'scissors') {
        niczyja()
    }
    else if (choices[computer_choice] == 'paper') {
        youWin()
    }
})

userButtons[2].addEventListener('click', () => {
    computer_choice = Math.floor(Math.random() * 3)

    if (choices[computer_choice] == 'stone') {
        youWin()
    }
    else if (choices[computer_choice] == 'scissors') {
        compWin()
    }
    else if (choices[computer_choice] == 'paper') {
        niczyja()
    }
})