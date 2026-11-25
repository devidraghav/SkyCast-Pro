async function getWeather() {

    const city = document.getElementById("city").value;

    if (!city) return;

    try {

        const response =
        await fetch(`http://localhost:5000/weather/${city}`);

        const data = await response.json();

        document.getElementById("weather").style.display = "block";

        document.getElementById("name").innerText =
        `${data.name}, ${data.sys.country}`;

        document.getElementById("temp").innerText =
        `${Math.round(data.main.temp)}°C`;

        document.getElementById("condition").innerText =
        data.weather[0].description;

        document.getElementById("humidity").innerText =
        `${data.main.humidity}%`;

        document.getElementById("wind").innerText =
        `${data.wind.speed} m/s`;

        document.getElementById("icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }
    catch(err){
        alert("City Not Found");
    }
}