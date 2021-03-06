// const body = document.querySelector('body');

const WEATHER_API_KEY = '3261265a8db1a705730de0dfca55c4af';
const COORDS_LS = 'coords'

function loadWeather(lat, lon){
    const span = document.createElement('span');

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(response){
        const weather = response.weather[0].main;
        const temp = response.main.temp;
        const city = response.name;
        
        span.innerHTML = `${city}<br>${weather}<br>${temp}`;
        span.classList.add('js-weather');
        body.appendChild(span);
    });
}

function saveCoords(loc){
    localStorage.setItem(COORDS_LS, JSON.stringify(loc));
}

function getLocation(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const loc = {
        lat,
        lon
    }
    saveCoords(loc);
    loadWeather(lat, lon);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if(loadedCoords === null){
        navigator.geolocation.getCurrentPosition(getLocation);
    }else{
        const lat = JSON.parse(loadedCoords).lat;
        const lon = JSON.parse(loadedCoords).lon;
        loadWeather(lat, lon);
    }

}

function init(){
    loadCoords();
}

init();