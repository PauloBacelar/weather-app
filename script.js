// Global variables
const icon = document.querySelector("img#icon");
const place = document.querySelector("h1#place");
const weatherDescription = document.querySelector("h3#description");
const temperature = document.querySelector("h2#temperature");
const couldNotAccess = document.querySelector("p#could-not-access");
let coords = "q=London";
let lat;
let long;

// Functions
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=b201157d2845f79ad6e02f582e930d6f`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((position) => {
          temperature.textContent = `${Math.round(position.main.temp)} ºC`;
          place.textContent = `${position.name}, ${position.sys.country}`;
          icon.src = `https://openweathermap.org/img/wn/${position.weather[0].icon}@2x.png`;
          weatherDescription.textContent = `${position.weather[0].description}`;
        });
    },
    () => {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b201157d2845f79ad6e02f582e930d6f`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((position) => {
          temperature.textContent = `${Math.round(position.main.temp)} ºC`;
          place.textContent = `${position.name}, ${position.sys.country}`;
          icon.src = `https://openweathermap.org/img/wn/${position.weather[0].icon}@2x.png`;
          weatherDescription.textContent = `${position.weather[0].description}`;
          couldNotAccess.classList.remove("hide");
        });
    }
  );
}
