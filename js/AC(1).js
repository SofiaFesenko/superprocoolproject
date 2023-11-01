let user = document.querySelector('.main__input-wraper-input')
let button = document.querySelector('.main__input-wraper-btn--ac')
let result = document.querySelector('.main__success')

button.addEventListener('click', () => {
    if ((user.value % 4 == 0) && (user.value % 100 != 0) || (user.value % 400 == 0)) {
        result.style.display = 'block'
        result.style.color = '#039900'
        result.textContent = 'Ви народилися у високосний рік!'
    } else {
        result.style.display = 'block'
        result.style.color = '#990000'
        result.textContent = 'Ви народилися не у високосний рік!'
    }
})