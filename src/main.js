console.log('main.js is connected!');
const API_KEY = '33635111040de5665d5b3c6a3a0901c0';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const city = document.querySelector('#city');
const temp = document.querySelector('#tempNow');
const desc = document.querySelector('#desc');
const minimum = document.querySelector('#min');
const maximum = document.querySelector('#max');

const button = document.querySelector('#data');
button.addEventListener('click', function () {
  // get the value from the input field
  const zip = document.querySelector('#zip').value;
  //call the getWeatherData function and pass it the city variable
  const fetch_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + zip + ',us?units=imperial&appid=' + API_KEY;

  fetch(fetch_url)
    .then(function (body) {
      //returns a promise
      body.json()
        .then(function (json) {
          //console.log(json);
          appendWeather(json);
        })
    })
})

function appendWeather(json) {

  city.innerHTML = json.name;

  temp.innerHTML = Math.floor(((9 / 5) * (json.main.temp - 273) + 32)) + '&deg';
  if (temp.innerHTML > 90) {
    temp.style.background = "red";
  } else if (temp.innerHTML < 40) {
    temp.style.background = "blue";
  } else {
    temp.style.background = "white";
  }
  desc.innerHTML = json.weather[0].description;

  minimum.innerHTML = 'Min<br>' + Math.floor(((9 / 5) * (json.main.temp_min - 273) + 32)) + '&deg';
  if (minimum.innerHTML > 90) {
    minimum.style.background = "red";
  } else if (minimum.innerHTML < 40) {
    minimum.style.background = "blue";
  } else {
    minimum.style.background = "white";
  }

  maximum.innerHTML = 'Max<br>' + Math.floor(((9 / 5) * (json.main.temp_max - 273) + 32)) + '&deg';
  if (maximum.innerHTML > 90) {
    maximum.style.background = "red";
  } else if (maximum.innerHTML < 40) {
    maximum.style.background = "blue";
  } else {
    maximum.style.background = "white";
  }

}

/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
