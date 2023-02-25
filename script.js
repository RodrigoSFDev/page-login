const body = document.querySelector('body');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const check = document.querySelector('#check');
const btn = document.querySelector('#btn');
const background = document.querySelector('#option_of_background');

const confereDados = () => {
  if (check.checked) {
    senha.type = 'text';
  }
  else {
    senha.type = 'password';
  };
 
};

const changeBackground = () => {
  if (background.value === 'lua') {
    body.style.backgroundImage = 'url(img/lua.jpg)'
  }
  if (background.value === 'cidade') {
    body.style.backgroundImage = 'url(img/cidade.png)'
  }
  if (background.value === 'espaco') {
    body.style.backgroundImage = 'url(img/espaco.jpg)'
  }
  if (background.value === 'montanha') {
    body.style.backgroundImage = 'url(img/mountain.jpg)'
  }
  if (background.value === 'ceu') {
    body.style.backgroundImage = 'url(img/ceu.jpg)'
  }
  

};



background.addEventListener('click' , changeBackground);
check.addEventListener('click', confereDados);