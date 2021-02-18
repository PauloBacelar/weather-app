let unitBeingUsed = "metric";
const unit = document.querySelector("span#unit");

// Main functions
unit.addEventListener("click", function () {
  unitBeingUsed = changeUnitBeingUsed(unitBeingUsed);

  $.getJSON(
    `http://api.openweathermap.org/data/2.5/weather?q=London&units=${unitBeingUsed}&appid=b201157d2845f79ad6e02f582e930d6f`,
    function (data) {
      temperature.innerHTML = `<span id="degrees">${data.main.temp}</span> º<span id="unit">C</span>`;
    }
  );
});

// Functions
function changeUnitBeingUsed(unitBeingUsed) {
  if (unitBeingUsed === "metric") {
    unitBeingUsed === "imperial";
  } else {
    unitBeingUsed = "metric";
  }

  return unitBeingUsed;
}
