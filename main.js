// const id = document.getElementById('login-form');
// const loginInput = id.querySelector('input');
// const loginButton = id.querySelector('button');

const loginForm=document.querySelector('#login-form');
const loginInput=document.querySelector("#login-form input")//한줄로


// console.log(loginInput);
// console.log(loginButton);



function handleLoginSubmit(tomato){
  // const inputValue=loginInput.value;
tomato.preventDefault();
console.log(tomato);

}

loginForm.addEventListener("submit",handleLoginSubmit );