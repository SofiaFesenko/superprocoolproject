let userMN = document.querySelectorAll('.main__input--mn')
let resultMN = document.querySelector('.main__MN-result')


function findNumber() {
    let userValuesDict = [Number(userMN[0].value), Number(userMN[1].value), Number(userMN[2].value)]

    for (let i of userValuesDict) {
        if (i > currentNumberMN) {
            currentNumberMN = i
        } 
    }
    resultMN.innerHTML = `Найбільше число, яке ви ввели - ${currentNumberMN}`
}

let currentNumberMN = 0


userMN[0].addEventListener('keyup', () => {
    findNumber()
})

userMN[1].addEventListener('keyup', () => {
    findNumber()
})

userMN[2].addEventListener('keyup', () => {
    findNumber()
})
