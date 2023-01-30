
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

   //  5 day forecast local storage

// Day one 

var dayOneWeatherDisplay = JSON.parse((window.localStorage.getItem("dayOneWeather")));
$("#day-one-temp").text("Temp: " + dayOneWeatherDisplay.temp);
$("#day-one-wind").text("Wind: " + dayOneWeatherDisplay.wind);
$("#day-one-humidity").text("Humidity: " + dayOneWeatherDisplay.humidity);



    }
    
    // Getting information from local storage and displaying to page if it exists
    if (localStorage.getItem("selectedCity") !== null) {
        displayLocalStorage();
    }
    