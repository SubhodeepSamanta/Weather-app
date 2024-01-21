const inputbox = document.querySelector(".search");
const searchbtn = document.querySelector(".logo");
const weather_img = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidity = document.querySelector('.t1');
const wind_speed = document.getElementById('win');

// Event listener for the search button
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

        // Update the UI with the weather data
        updateUI(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateUI(data) {
    // Update the UI elements with the weather data
    temperature.innerHTML = `${Math.round(data.main.temp)}<sup>o</sup>C`;
    cityElement.textContent = data.name;
    humidity.textContent = `${data.main.humidity}%`;
    wind_speed.textContent = `${data.wind.speed} km/h`;

    // You should replace the cloudy.png with the actual icon provided by the API
    weather_img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}
