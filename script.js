const input = document.getElementById("input");
const btnSearch = document.getElementById("btn-search");
const image = document.getElementById("img-main");
const temperatureText = document.getElementById("temperature");
const cityText = document.getElementById("city");
const humidityText = document.getElementById("humidity");
const windText = document.getElementById("wind");

const apiKey = "032590c112d32ac5383879526773b1ce";
const cityDefault = "Oslo";
const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

btnSearch.addEventListener("click", () => {
  const city = input.value;

  getWeather(city);
});

function getWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const temperature = Math.round(data.main.temp);
      const humidity = data.main.humidity;
      const wind = Math.round(data.wind.speed * 3.6);

      setIcon(data.weather[0].main);

      temperatureText.innerText = temperature + "°C";
      cityText.innerText = data.name;
      humidityText.innerText = humidity + "%";
      windText.innerText = wind + "km/h";
    });
}

function setIcon(text) {
  // implement clear, clouds, drizzle, mist, rain and snow
  if (text === "Clear") {
    image.src = "images/clear.png";
  } else if (text === "Clouds") {
    image.src = "images/clouds.png";
  } else if (text === "Drizzle") {
    image.src = "images/drizzle.png";
  } else if (text === "Mist") {
    image.src = "images/mist.png";
  } else if (text === "Rain") {
    image.src = "images/rain.png";
  } else if (text === "Snow") {
    image.src = "images/snow.png";
  }
}

getWeather(cityDefault);
