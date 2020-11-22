const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.ulMenu');

btn.addEventListener('click', function() {
    menu.classList.toggle('is-active');
})

const lis = menu.querySelectorAll('a');


const inicio = lis[0];
const sobremi = lis[1];
const programacion = lis[2];

inicio.addEventListener('click', () => {
    menu.classList.remove('is-active');
})
sobremi.addEventListener('click', () => {
    menu.classList.remove('is-active');
})
programacion.addEventListener('click', () => {
    menu.classList.remove('is-active');
})

const deletebtn = document.querySelector('.deletebtn');
const entrada1 = document.querySelector('.entrada1');

deletebtn.addEventListener('click', ()=>{
    entrada1.classList.toggle('hide');
})


