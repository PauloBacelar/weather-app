// Global variables
const icon = document.querySelector("img#icon");

$.getJSON(
  "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=b201157d2845f79ad6e02f582e930d6f",
  function (data) {
    icon.src =
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  }
);

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
  }
});