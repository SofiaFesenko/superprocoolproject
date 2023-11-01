let userC = document.querySelectorAll('.main__input--c')
let userChoices = document.querySelectorAll('.main__btn--c')
let userChoicesResult = document.querySelector('.main__btn__c--res')
let resultC = document.querySelector('.main__input__c__answer')

currentButtonPressed = 0

function buttonPressed(value) {
    return currentButtonPressed = value
}

userChoicesResult.addEventListener('click', () => {
    if (currentButtonPressed == '1') {
        resultC.textContent = Number(userC[0].value) + Number(userC[1].value)
    }
    if (currentButtonPressed == '2') {
        resultC.textContent = Number(userC[0].value) * Number(userC[1].value)
    }
    if (currentButtonPressed == '3') {
        resultC.textContent = Number(userC[0].value) - Number(userC[1].value)
    }
    if (currentButtonPressed == '4') {
        if (Number(userC[1].value) != 0) {
            resultC.textContent = Number(userC[0].value) / Number(userC[1].value)
        } else {
            resultC.textContent = 'ділення на 0'
        }
        
    }
})
