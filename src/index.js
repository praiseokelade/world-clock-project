function updateTime() {
  let manchester = document.querySelector("#manchester");
  let manchesterDate = manchester.querySelector("#date");
  let manchesterTime = manchester.querySelector("#time");
  let manchesterTimeElement = moment().tz("Europe/London");

  manchesterDate.innerHTML = manchesterTimeElement.format("MMMM Do, YYYY");
  manchesterTime.innerHTML = manchesterTimeElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector("#date");
  let sydneyTime = sydney.querySelector("#time");
  let sydneyTimeElement = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyTimeElement.format("MMMM Do, YYYY");
  sydneyTime.innerHTML = sydneyTimeElement.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cities = document.querySelector("#cities");
  cities.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}<small></div>
        </div>
        <a href="/">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
