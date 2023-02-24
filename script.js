const form = document.querySelector('#form')
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const check = document.querySelector('#check');
const btn = document.querySelector('#btn');

const confereDados = () => {
  if (check.checked) {
    senha.type = 'text';
  }
  else {
    senha.type = 'password';
  };
 
};

check.addEventListener('click', confereDados);