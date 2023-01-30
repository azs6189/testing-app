
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

  

// Display today's API results on the page - this needs to be saved to local storage to remain on the page 

// Show City Name from local storage and today's date with moment
var todaysDate = moment().format("L");
localStorage.setItem("selectedCity", cityName);
$("#selected-city-heading").text(cityName + " " + "(" + todaysDate + ")");


// Show current temperature
var todaysTemp = (Math.floor((response.list[0].main.temp) -273.15));
localStorage.setItem("todaysTemp", todaysTemp);
$("#selected-city-temp").text("Temp: " + todaysTemp + "°C");

// Show wind speed
var todaysWind = response.list[0].wind.speed;
localStorage.setItem("todaysWind", todaysWind);
$("#selected-city-wind").text("Wind: " + todaysWind + " KPH");


// Show humidity 
var todaysHumidity = response.list[0].main.humidity;
localStorage.setItem("todaysHumidity", todaysHumidity);
$("#selected-city-humidity").text(" Humidity: " + todaysHumidity + " %");

// Display 5-day forecast 

// Day one weather 
var dayOneWeather = {
date: 0,
icon: 0,
temp: (Math.floor((response.list[1].main.temp) -273.15)) + "°C",
wind: response.list[1].wind.speed + " KPH",
humidity: response.list[1].main.humidity + "%",
}

var dayTwoWeather = {
  date: 0,
  icon: 0,
  temp: (Math.floor((response.list[2].main.temp) -273.15)) + "°C",
  wind: response.list[2].wind.speed + " KPH",
  humidity: response.list[2].main.humidity + "%",
  }
  
  var dayThreeWeather = {
    date: 0,
    icon: 0,
    temp: (Math.floor((response.list[3].main.temp) -273.15)) + "°C",
    wind: response.list[3].wind.speed + " KPH",
    humidity: response.list[3].main.humidity + "%",
    }

    var dayFourWeather = {
      date: 0,
      icon: 0,
      temp: (Math.floor((response.list[4].main.temp) -273.15)) + "°C",
      wind: response.list[4].wind.speed + " KPH",
      humidity: response.list[4].main.humidity + "%",
      }

var dayFiveWeather = {
      date: 0,
      icon: 0,
      temp: (Math.floor((response.list[5].main.temp) -273.15)) + "°C",
      wind: response.list[5].wind.speed + " KPH",
      humidity: response.list[5].main.humidity + "%",
      }

// Saving all to local storage

localStorage.setItem("dayOneWeather", JSON.stringify(dayOneWeather));
localStorage.setItem("dayTwoWeather", JSON.stringify(dayTwoWeather));
localStorage.setItem("dayThreeWeather", JSON.stringify(dayThreeWeather));
localStorage.setItem("dayFourWeather", JSON.stringify(dayFourWeather));
localStorage.setItem("dayFiveWeather", JSON.stringify(dayFiveWeather));



});
});
});



