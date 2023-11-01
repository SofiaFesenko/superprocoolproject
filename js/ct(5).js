let userCT = document.querySelector('.main__input-wraper-input--ct')
let buttonCT = document.querySelector('.main__input-wraper-btn--ct')
let resultCT = document.querySelector('.main__CT-wraper-result')

hours = 0
minutes = 0

buttonCT.addEventListener('click', () => {
    if (Number(userCT.value) < 60) {
        minutes = Number(userCT.value)
    }
    else if (Number(userCT.value) >= 60) {
        hours = Math.floor(Number(userCT.value) / 60)
        minutes = Number(userCT.value) - hours * 60
    }
    resultCT.innerHTML = `${hours} годин ${minutes} хвилин`
    hours = 0
    minutes = 0   
})
