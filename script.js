// Global variables
const icon = document.querySelector("img#icon");
const place = document.querySelector("h1#place");
const weatherDescription = document.querySelector("h3#description");
const temperature = document.querySelector("h2#temperature");

// Functions
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let coords = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    },
    () => {
      let coords = "q=London";
    }
  );
}

// Main function
$.getJSON(
  `http://api.openweathermap.org/data/2.5/weather?${coords}&units=metric&appid=b201157d2845f79ad6e02f582e930d6f`,
  function (data) {
    icon.src =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    weatherDescription.textContent = `${data.weather[0].description}`;
    temperature.innerHTML = `${Math.round(data.main.temp)} ºC`;
  }
);
