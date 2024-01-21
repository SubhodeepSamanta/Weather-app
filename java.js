const inputbox = document.querySelector(".search");
const searchbtn = document.querySelector(".logo");
const weather_img = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidity = document.querySelector('.t1');
const wind_speed = document.getElementById('win');


searchbtn.addEventListener('click', function () {
    const city = inputbox.value;
    checkWeather(city);
});

async function checkWeather(city) {
    const apiKey = "d57d07049944a25a3ee286f80f452484";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();
        updateUI(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateUI(data) {
    temperature.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`;
    cityElement.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind_speed.textContent = `${Math.round(data.wind.speed)} Km/h`;
    weather_img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

