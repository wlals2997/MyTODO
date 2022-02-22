const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const logoutForm = document.querySelector('#logout-form');

const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function handleLoginSubmit(event) {
  const username = loginInput.value;
  event.preventDefault();
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}
function paintLogout() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}
logoutForm.addEventListener('click', paintLogout);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', handleLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
