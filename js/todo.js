const todoForm = document.querySelector('#todo-form');
const todolist = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-form input');

//const todoInput= todoForm.querySelector('input');
let todos = [];
// const todos = [];
console.log(todoInput);

const TODOS_KEY = 'todos';
function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}
function deleteTodo(event) {
  const getdelete = event.target.parentNode;
  getdelete.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(getdelete.id));
  saveTodos();
}
function paintToDo(newTodo) {
  const li = document.createElement('li'); //<li></li>
  li.id = newTodo.id;
  const span = document.createElement('span'); //<span></span>
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span); //<li><span></span></li>
  li.appendChild(button);
  span.innerText = '✅ ' + newTodo.text;
  todolist.appendChild(li); //todolist안에 li를 그려준다.
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const savedUserName = localStorage.getItem(USERNAME_KEY);
  if (savedUserName == null) {
    alert('login please');
    todoInput.value='';
  } else {
    const newTodo = todoInput.value; //input의 현재 value를 새로운 변수에 복사하는 것이다.
    todoInput.value = '';
    const newTodoObj = {
      text: newTodo, //텍스트를 객채로 받아올려고함
      id: Date.now(), //랜덤숫자를 얻는다.,//아이디로 각각의 li item을 구별하고 싶다
    };
    todos.push(newTodoObj); //newTodo를 todos배열에 push 해준다.
    //   console.log(newTodo, todoInput.value);
    paintToDo(newTodoObj); //화면에 newTodo를 그려준다.
    saveTodos();
  }
}
todoForm.addEventListener('submit', handleTodoSubmit);

// function sayHello(item){

// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedTodos);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string화 한것을 object로 만들어준다
  todos = parsedToDos; //todos에 parseTodos를 넣어서 전에 있던 toDo들을 복원한다.
  parsedToDos.forEach(paintToDo);
  //    parseTodo.forEach((item) => console.log("what i got",item));
}
