// const id = document.getElementById('login-form');
// const loginInput = id.querySelector('input');
// const loginButton = id.querySelector('button');

const loginForm=document.querySelector('#login-form');
const loginInput=document.querySelector("#login-form input")//한줄로
const link=document.querySelector("a");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
function handleLoginSubmit(event){
  // const inputValue=loginInput.value;
event.preventDefault();
// const username=loginInput.value;
localStorage.setItem(USERNAME_KEY,username);
loginForm.classList.add(HIDDEN_CLASSNAME)
paintGreetings(username);
// greeting.innerText=`Hello ${userName}`;//"Hello "+userName
// greeting.classList.remove(HIDDEN_CLASSNAME);
}
function paintGreetings(username){
  greeting.innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
// function handleLinkSumbit(event){
  // event.preventDefault();  //기본동작은 막아버림
//   console.log(event)
// }


// link.addEventListener("click",handleLinkSumbit);

const savedUserName=localStorage.getItem(USERNAME_KEY);
if(savedUserName===null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",handleLoginSubmit );
}else{
 paintGreetings(savedUserName) //localstorage에서 정보를 받아오는것

}