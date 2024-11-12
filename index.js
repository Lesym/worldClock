function time() {
  //LA
  let LAElement = document.querySelector("#LA");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  let LADateElement = document.querySelector(".date");
  let LATimeElement = document.querySelector(".time");
  LADateElement.innerHTML = moment().add(1, "s").format("MMMM Do YYYY");
  LATimeElement.innerHTML = losAngelesTime.format(
    "h:m:ss  [<small>]A[</small>]"
  );

  //SY
  let SYElement = document.querySelector("#SY");
  let SYDateElement = document.querySelector("#SY.date");
  let SYTimeElement = document.querySelector("#SY.time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SYDateElement.innerHTML = moment().format("MMMM Do YYYY");
  SYTimeElement.innerHTML = SydneyTime.format("h:m:ss [<small>]A[</small>]");
}
setInterval(time, 100);
time();
