const form = document.querySelector('#form')
const email = document.querySelector('#email');
const senha = document.querySelector('#password');
const btn = document.querySelector('#btn');

const confereDados = (evt) => {
  evt.preventDefault();

  email.removeAttribute(type)
  // const dados = document.createElement('p')
  // dados.innerText = `Conferir Email e Senha!

  // Email: ${email.value} e Senha: ${senha.value}`
  // dados.style.color = 'black';
  // dados.style.marginTop = '20px';
  // dados.style.fontWeight = '700';

  // form.append(dados);
};

window.onload = () => {

  btn.addEventListener('click', confereDados);

};