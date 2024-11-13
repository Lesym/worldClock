function time() {
  //LA
  let LAElement = document.querySelector("#LA");
  if (LAElement) {
    let losAngelesTime = moment().tz("America/Los_Angeles");
    let LADateElement = document.querySelector(".date");
    let LATimeElement = document.querySelector(".time");
    LADateElement.innerHTML = moment().add(1, "s").format("MMMM Do YYYY");
    LATimeElement.innerHTML = losAngelesTime.format(
      "h:m:ss  [<small>]A[</small>]"
    );
  }
  //SY
  let SYElement = document.querySelector("#SY");
  if (SYElement) {
    let SYDateElement = document.querySelector("#SY.date");
    let SYTimeElement = document.querySelector("#SY.time");
    let SydneyTime = moment().tz("Australia/Sydney");

    SYDateElement.innerHTML = moment().format("MMMM Do YYYY");
    SYTimeElement.innerHTML = SydneyTime.format("h:m:ss [<small>]A[</small>]");
  }
}
setInterval(time, 1000);
time();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:m:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}
let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
