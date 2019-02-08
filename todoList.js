const todoForm = document.querySelector('.js-todoForm');
const todoList = document.querySelector('.js-todoList');
const formBox = document.querySelector('.js-todoForm_box');
const todoList_title = document.querySelector('.js-todoList_title');

const TODOS_LS = 'todos';

let todos = [];

function saveTodo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function delTodo(btn){
    const li = btn.path[1];

    todoList.removeChild(li);

    const newTodoList = todos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });

    todos = newTodoList;
    
    saveTodo();

    if(todos.length === 0){
        todoList_title.classList.add(HIDE_CN);
    }
}

function addTodo(list){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const span = document.createElement('span');
    const newId = todos.length+1;

    btn.addEventListener('click', delTodo);
    btn.innerHTML ='𝘅';
    span.innerHTML = list;
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
    todoList_title.classList.remove(HIDE_CN);
    li.id = newId;

    const todoObj = {
        todo: list,
        id: newId
    }
    todos.push(todoObj);
    saveTodo();
}

function submitHandler(event){
    const todo = formBox.value;
    event.preventDefault();    
    formBox.value = '';
    addTodo(todo);
}

function getTodo(){
    todoForm.addEventListener('submit', submitHandler);
}

function loadTodo(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    const parsedTodos = JSON.parse(loadedTodos);
    if(loadedTodos !== null){
        parsedTodos.forEach(function(list){
            addTodo(list.todo);
        });
    }
}

function init(){
    loadTodo();
    getTodo();
}

init();