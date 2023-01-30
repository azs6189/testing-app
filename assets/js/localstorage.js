
function displayLocalStorage (){



    // City name:
        $("#selected-city-heading").text(window.localStorage.getItem("selectedCity")
        + " " + "(" + 
        (moment().format("L")) +
        ")");
        
    
    // Today's temperature:
    $("#selected-city-temp").text(
        "Temp: " +
        (window.localStorage.getItem("todaysTemp") +
        "°C"
        ));
    
    // Today's wind:
    $("#selected-city-wind").text(
        "Wind: " + 
        (window.localStorage.getItem("todaysWind")) +
        " KPH");
        
    
    // Today's humidity
    $("#selected-city-humidity").text(
        " Humidity: " +
        (window.localStorage.getItem("todaysHumidity")) +
        " %"
        
        );

   //  5 day forecast from local storage

// Day one 

var dayOneWeatherDisplay = JSON.parse((window.localStorage.getItem("dayOneWeather")));
$("#day-one-temp").text("Temp: " + dayOneWeatherDisplay.temp);
$("#day-one-wind").text("Wind: " + dayOneWeatherDisplay.wind);
$("#day-one-humidity").text("Humidity: " + dayOneWeatherDisplay.humidity);

// Day two

var dayTwoWeatherDisplay = JSON.parse((window.localStorage.getItem("dayTwoWeather")));
$("#day-two-temp").text("Temp: " + dayTwoWeatherDisplay.temp);
$("#day-two-wind").text("Wind: " + dayTwoWeatherDisplay.wind);
$("#day-two-humidity").text("Humidity: " + dayTwoWeatherDisplay.humidity);

// Day three

var dayThreeWeatherDisplay = JSON.parse((window.localStorage.getItem("dayThreeWeather")));
$("#day-three-temp").text("Temp: " + dayThreeWeatherDisplay.temp);
$("#day-three-wind").text("Wind: " + dayThreeWeatherDisplay.wind);
$("#day-three-humidity").text("Humidity: " + dayThreeWeatherDisplay.humidity);

// Day four
var dayFourWeatherDisplay = JSON.parse((window.localStorage.getItem("dayFourWeather")));
$("#day-four-temp").text("Temp: " + dayFourWeatherDisplay.temp);
$("#day-four-wind").text("Wind: " + dayFourWeatherDisplay.wind);
$("#day-four-humidity").text("Humidity: " + dayFourWeatherDisplay.humidity);

// Day five
var dayFiveWeatherDisplay = JSON.parse((window.localStorage.getItem("dayFiveWeather")));
$("#day-five-temp").text("Temp: " + dayFiveWeatherDisplay.temp);
$("#day-five-wind").text("Wind: " + dayFiveWeatherDisplay.wind);
$("#day-five-humidity").text("Humidity: " + dayFiveWeatherDisplay.humidity);

    }
    
    // Getting information from local storage and displaying to page if it exists
    if (localStorage.getItem("selectedCity") !== null) {
        displayLocalStorage();
    }
    