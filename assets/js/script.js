// Click event

$("#search-button").click(function (event){

//  Prevent default
event.preventDefault();

// Grab text from input box
var cityName = $("#search-input").val();

// Connecting to the city search API
var apiKey = "882d84eda384fa6fdb4ecdcf117ae985";
var cityQueryURL =
  "http://api.openweathermap.org/geo/1.0/direct?q=" +
  cityName +
  "&limit=1&appid=" +
  apiKey;

// Connecting to the 5-day weather app API

// AJAX function: Getting the longitude and latitude from city input
$.ajax({
  url: cityQueryURL,
  method: "GET",
}).then(function (response) {
var latitude = response[0].lat;
var longitude = response[0].lon;

 console.log(latitude);
 console.log(longitude);


 var weatherQueryURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
  latitude +
  "&lon=" +
  longitude +
  "&appid=" +
  apiKey;


//   AJAX function: Getting the weather using the coodinates
  $.ajax({
    url: weatherQueryURL,
    method: "GET",
}).then(function (response) {
console.log(response);

// Display API results on the page 

// Show City Name
$("#selected-city-heading").text(cityName);

// Show current temperature
var todaysTemp = (Math.floor((response.list[0].main.temp) -273.15));
$("#selected-city-temp").text("Temp: " + todaysTemp + "°C");

// Show wind speed
var todaysWind = response.list[0].wind.speed;
$("#selected-city-wind").text("Wind: " + todaysWind + " KPH");
console.log(todaysWind);
// Show humidity 
var todaysHumidity = response.list[0].main.humidity;
$("#selected-city-humidity").text(" Humidity: " + todaysHumidity + " %");

});
});
});



