const body = document.querySelector('body');

const PICNUM = 21;

function setBackground(num){
    const img = document.createElement('img');
    img.src = `img/${num}.jpg`;
    img.classList.add('bgi');

    body.appendChild(img);
    
}

function getNum(){
    const num = Math.floor(Math.random()*PICNUM) +1;
    setBackground(num);    
}

function init(){
    getNum();
}

init();