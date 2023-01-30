
// Connect input from the search bbox to the searched variable  


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

var latitude = 0;
var longitude = 0;
var weatherQueryURL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
  latitude +
  "&lon=" +
  longitude +
  "&appid=" +
  apiKey;

// AJAX function: Getting the longitude and latitude from city input
$.ajax({
  url: cityQueryURL,
  method: "GET",
}).then(function (response) {
latitude = response[0].lat;
 longitude = response[0].lon;


//   AJAX function: Getting the weather using the coodinates
  $.ajax({
    url: weatherQueryURL,
    method: "GET",
}).then(function (response) {
console.log(response);

});
});
});


