const time = document.querySelector('.js-time');
const hello = document.querySelector('.js-greeting_hello');
function sayHello(hours){
    if(hours>18){
        hello.innerHTML = 'Good evening ';
    }else if(hours>12){
        hello.innerHTML = 'Good afternoon ';
    }else if(hours>6){
        hello.innerHTML = 'Good morning ';
    }else{
        hello.innerHTML = '잠이나 자라 ';
    }
}

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    time.innerHTML = `${
    hours < 10 ? `0${hours}` : `${hours}`}:${
    min < 10 ? `0${min}` : `${min}`}:${
    sec < 10 ? `0${sec}` : `${sec}`}`;
    
    sayHello(hours);
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();