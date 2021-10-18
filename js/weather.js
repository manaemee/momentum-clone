const API_KEY = "1349ea9f4225b93a8da4f034c939db7e";

function onGeoOk(position){
 const lat = position.coords.latitude;
 const lng = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
fetch(url)
.then(response => response.json())
.then((data) =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText  = data.name;
    city.innerText  = data.weather[0].main;
});
}

function onGeoError(){
alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

