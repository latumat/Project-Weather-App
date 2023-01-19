const searchButton = document.getElementById("search");
const description = document.getElementById("description");
const locationName = document.getElementById("location-name");
const temperature = document.getElementById("temperature");
const weather = document.getElementById("weather");

function farToCel(degree) {
    return Math.ceil(degree - 273.15) + "°C";
}

async function callWeatherAPI(location) {
    let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=34ead1505331464eb63c0dfa39ff59d5`, {mode: 'cors'});
    let response = await request.json();
    return response
}

async function searchLocation() {
    const location = document.getElementById("location").value;
    let locationInfo = await callWeatherAPI(location);
    console.log(locationInfo);

    description.innerHTML = locationInfo.weather[0].description;
    locationName.innerHTML = `${locationInfo.name}, ${locationInfo.sys.country}`;
    temperature.innerHTML = farToCel(locationInfo.main.temp);
    weather.innerHTML = locationInfo.weather[0].main;
}

searchButton.addEventListener('click', () => {
    searchLocation();
})

async function original() {
    let locationInfo = await callWeatherAPI("Montreal");

    description.innerHTML = locationInfo.weather[0].description;
    locationName.innerHTML = `${locationInfo.name}, ${locationInfo.sys.country}`
    temperature.innerHTML = farToCel(locationInfo.main.temp);
    weather.innerHTML = locationInfo.weather[0].main;
}

original();