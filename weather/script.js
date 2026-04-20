const apiKey = "ca2fb287aff257a252c222ee96b556a6";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const historyList = document.getElementById("history");

console.log("Script Loaded");

window.onload = function () {
    console.log("Page Loaded");
    loadHistory();
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name";
        return;
    }

    getWeather(city);
});

async function getWeather(city) {

    console.log("Fetching weather...");

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        console.log("Fetch request sent");

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log("Data received");

        displayWeather(data);
        saveCity(city);

    }
    catch (error) {

        console.log("Error occurred:", error);

        weatherResult.innerHTML = "Error: " + error.message;
    }

}

function displayWeather(data) {

    const city = data.name;
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    weatherResult.innerHTML = `
        <h2>${city}</h2>
        <p>🌡 Temperature: ${temp} °C</p>
        <p>☁ Condition: ${condition}</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌬 Wind Speed: ${wind} m/s</p>
    `;
}

function saveCity(city) {

    let cities = JSON.parse(localStorage.getItem("cities")) || [];

    if (!cities.includes(city)) {
        cities.push(city);
        localStorage.setItem("cities", JSON.stringify(cities));
    }

    loadHistory();
}

function loadHistory() {

    historyList.innerHTML = "";

    let cities = JSON.parse(localStorage.getItem("cities")) || [];

    cities.forEach(city => {

        const li = document.createElement("li");
        li.textContent = city;

        li.addEventListener("click", () => {
            getWeather(city);
        });

        historyList.appendChild(li);
    });
}