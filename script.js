document.addEventListener('DOMContentLoaded', (event) => {
    const buildings = document.querySelectorAll('.building');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    const weatherText = document.getElementById('weather-text');

    buildings.forEach((building, index) => {
        building.addEventListener('click', () => {
            notificationText.textContent = `You clicked on building ${index + 1}`;
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        });
    });

    // Fetch weather data from OpenWeatherMap
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const city = 'New York'; // Replace with your desired city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            weatherText.textContent = `Weather in ${city}: ${data.weather[0].description}, ${data.main.temp}°C`;
        })
        .catch(error => {
            weatherText.textContent = 'Failed to load weather data';
        });
});
