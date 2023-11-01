let header_modal__form_text = document.querySelector(".header-modal__form-text")
let header_modal__form_btn = document.querySelector(".header-modal__form-btn")
let header_modal = document.querySelector(".header-modal")
let wraper_modal = document.querySelector(".wraper-modal")

let footerInp = document.querySelector('.footer__btn-input')
let footerBtn = document.querySelector('.footer__btn-btn')

let footerModel = document.querySelector('.footer-model')
let footerModelBtn = document.querySelector('.footer-model-btn')
let footerModelWr = document.querySelector('.footer-model-wrapper')

let header__user = document.querySelector(".header__user")

let topAnimate = [
    {
        position: "relative",
        top: "0",
        opacity: ".5"
    },
    {
        position: "relative",
        top: "-30%",
        opacity: "0"
    }
]

if (localStorage.getItem("name")) {
    wraper_modal.style.display = "none"
    header__user.textContent = `Вітаємо, ${localStorage.getItem("name")}!`
}

header_modal__form_btn.addEventListener("click", () => {
    if (header_modal__form_text.value) {
        localStorage.setItem("name", header_modal__form_text.value)
        header__user.textContent = `Вітаємо, ${localStorage.getItem("name")}!`
        header_modal.animate(topAnimate, {duration: 300, iterations: 1})
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            wraper_modal.style.display = "none"
            document.body.style.overflow = "scroll"
        }, 300)
    }
})

footerBtn.addEventListener('click', () => {
    if (footerInp.value) {
        document.body.style.overflow = "hidden"
        localStorage.setItem("email", footerInp.value)
        footerModelWr.style.display = "flex"
        footerModel.animate(topAnimate.reverse(), {duration: 300, iterations: 1})
    }
})

footerModelBtn.addEventListener('click', () => {
    footerModel.animate(topAnimate.reverse(), {duration: 300, iterations: 1})
    setTimeout(() => {
        footerModelWr.style.display = "none"
        document.body.style.overflow = "scroll"
    }, 300)
})
