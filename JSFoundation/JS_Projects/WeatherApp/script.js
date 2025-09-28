document.addEventListener('DOMContentLoaded', () =>{
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');
    const API_KEY = 'ee9ff53a5d5d4e62618c95f5f0a1cdcf';

    getWeatherBtn.addEventListener('click', async ()=>{
        const city = cityInput.value.trim();
        if(!city) return;

        // It may throw error
        // server/database is always in some another continent
        try {
        const weatherData = await fetchWeatherData(city);
        displayWeatherData(weatherData)
        }
        catch(error) {
            showError(error);
        }

        async function fetchWeatherData(city) {
            // gets the data
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}
            &units=metric
            &appid=${API_KEY}`;
            const response  = await fetch(url);
            console.log("RESPONSE:",response);

            if(!response.ok)
            {
                throw new Error("City not found!!");
            }
            const data = await response.json();
            return data;
        }
        function displayWeatherData(data) {
            // displays the data
            console.log(data);

            cityNameDisplay.innerText = data.name;
            temperatureDisplay.innerText = "Current Temperature: " + data.main.temp + "\n" +
                                            "Feels like: " + data.main.feels_like ;
            descriptionDisplay.innerText = data.weather[0].description;
            weatherInfo.classList.remove('hidden');
            errorMessage.classList.add('hidden');

        }

        function showError(error){
            console.error(error);
            errorMessage.classList.remove('hidden');
            weatherInfo.classList.add('hidden');
        }


    })
})