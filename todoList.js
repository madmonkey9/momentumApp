const todoForm = document.querySelector('.js-todoForm');
const todoList = document.querySelector('.js-todoList');
const formBox = document.querySelector('.js-todoForm_box');
const todoList_title = document.querySelector('.js-todoList_title')

const TODOS_LS = 'todos';

let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function addTodo(list){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const newId = todos.length+1;
    
    button.innerHTML ='𝘅';
    li.appendChild(button);
    li.innerHTML += list;
    todoList.appendChild(li);
    todoList_title.classList.remove(HIDE_CN);
    li.id = newId;

    const todoObj = {
        todo: list,
        id: newId
    }
    todos.push(todoObj);
}

function submitHandler(event){
    const todo = formBox.value;
    event.preventDefault();    
    formBox.value = '';
    addTodo(todo);
    saveTodo();
}

function getTodo(){
    todoForm.addEventListener('submit', submitHandler);
}

function loadTodo(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    const parsedTodos = JSON.parse(loadedTodos);
    console.log(parsedTodos);
    if(loadedTodos === null){
        getTodo();
    }else{
        parsedTodos.forEach(function(list){
            addTodo(list.todo);
        });
        getTodo();
    }
}

function init(){
    loadTodo();
}

init();