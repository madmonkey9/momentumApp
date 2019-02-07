const body = document.querySelector('body');
const form = document.querySelector('.js-askNameForm');
const inputNameBox = document.querySelector('.inputName');
const Toggle = document.querySelectorAll('.wrap_item');
const userName = document.querySelector('.js-greeting_userName');

const USER_LS = 'currentUser';
const HIDE_CN = 'hide';

function greeting(user){
    Toggle.forEach(function(a){
            a.classList.toggle(HIDE_CN);
    });
    userName.innerHTML = user;
}

function saveUserName(name){
    localStorage.setItem(USER_LS, name);
}

function submitHandler(event){
    event.preventDefault();
    saveUserName(inputNameBox.value);
    greeting(inputNameBox.value);
}

function askName(){
    form.addEventListener("submit", submitHandler);
}

function loadName(){
    const loadedName = localStorage.getItem(USER_LS);
    if(loadedName === null){
        askName();
    }
    else{
        greeting(loadedName);
    }
}

function init(){
    loadName();
}
init();