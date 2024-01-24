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

updateTime();
setInterval(updateTime, 1000);
