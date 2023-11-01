let selector = document.querySelector('.header__links-link')

let numerical = document.querySelectorAll('.numerical')
let game = document.querySelectorAll('.game')
let acquaintance = document.querySelectorAll('.acquaintance')


selector.addEventListener('change', () => {
    const selectedValue = selector.selectedOptions[0].value;
    console.log(selectedValue);
    if (selectedValue === 'Числовий') {
        for (let i of numerical) {
            i.classList.remove('none');
        }
        for (let i of game) {
            i.classList.add('none');
        }
        for (let i of acquaintance) {
            i.classList.add('none');
        }
    } 
    
    else if (selectedValue === 'Ігровий') {
        for (let i of game) {
            i.classList.remove('none');
        }
        for (let i of numerical) {
            i.classList.add('none');
        }
        for (let i of acquaintance) {
            i.classList.add('none');
        }
    } 
    
    else if (selectedValue === 'Ознайомчий') {
        for (let i of acquaintance) {
            i.classList.remove('none');
        }
        for (let i of game) {
            i.classList.add('none');
        }
        for (let i of numerical) {
            i.classList.add('none');
        }
    }

    else if (selectedValue === 'Все') {
        for (let i of acquaintance) {
            i.classList.remove('none');
        }
        for (let i of game) {
            i.classList.remove('none');
        }
        for (let i of numerical) {
            i.classList.remove('none');
        }
    }
})