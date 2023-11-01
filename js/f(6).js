let field = document.querySelector('.main__f-field')
let ball = document.querySelector('.main__f-field-img')


field.addEventListener('click', (e) => {
    let offsets = e.target.getBoundingClientRect();
    let y = e.clientY - offsets.top;
    let x = e.clientX - offsets.left;

    ball.style.top = y + 'px';
    ball.style.left = x + 'px'
});