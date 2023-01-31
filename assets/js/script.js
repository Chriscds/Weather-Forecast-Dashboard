// Query URL variable
var urlQuery = "https://api.openweathermap.org/data/2.5/weather?";
// Api key variable
var apiKey = "&appid=50e333b7d0f2f6f179249a41b9ce7e72";
// Weather Icon url variable
var weatherIcon = "http://openweathermap.org/img/wn/";
// empty variable to assign within the search function.
var queryUrlAndKey;

// Add date with moment.js 
var today = moment().format("[(] D [/] MM [/] YYYY [)]");

// funtion to search on click after input #search-input.
$("#search-button").on("click", function (event) {
    // clear the #today div and replace with the current search.
    $("#today").empty();
    event.preventDefault();
    // variable for search input value.
    var searchInput = $("#search-input").val();
    // queryUrlAndKey builds the search query.
    queryUrlAndKey = urlQuery + "q=" + searchInput + apiKey;

    // console the query.
    console.log(queryUrlAndKey);

    // ajax call function
    $.ajax({
        url: queryUrlAndKey,
        method: "GET",
    }).then(function (response) {

    // Temperature convertion: Kelvin = - 273.15
    var kelvin = response.main.temp;
    var celsius = kelvin -273.15;
    var degreesSymbol = '\u00B0';

    // Current weather icon for today
    var currentIcon = response.weather[0].icon;
    todaysIcon = weatherIcon + currentIcon + "@2x.png";
    var iconImage = $("<img>").attr("src", todaysIcon);
    var iconImageNew = JSON.stringify(todaysIcon)

    // console log to see if result is correct URL
    // console.log(todaysIcon);
    // log url query
    // Console logs the result of celsius with only two didgets after the decimal.
    // console.log(celsius.toFixed(2) + " C");

// Content to transfer to HTML ----------------------------------------------------------------

    // create div to display the results of the search query/variables below 
    // to prepend to ID #today section
    var todaysWeather = $('<div class="current-weather">');

// variables for different results to store:
    // City variable
    var searchedCity = response.name;
    var cityName = $('<h2>').text(searchedCity + " " + today);
    todaysWeather.append(cityName);
    iconImage.append(iconImageNew);

    // Temperature variables
    // temperature is coming from variable ln 29 var celsius = kelvin -273.15;
    var tempToday = $('<p>').text("Temp: " + celsius.toFixed(2) + " " + degreesSymbol + "C");
    todaysWeather.append(tempToday);

    // Wind (p)
    var windSpeed = response.wind.speed;
    var windToday = $('<p>').text("Wind speed: " + windSpeed + " mps"); // check if kph is the correct value
    todaysWeather.append(windToday);

    // Humidity (p)
    var humidity = response.main.humidity;
    var humidityToday = $('<p>').text("Humidity: " + humidity + " %");
    todaysWeather.append(humidityToday);

// Prepend to #today 
        $("#today").prepend(todaysWeather);
        $(".current-weather").prepend(iconImage)
        // clears search box after button is clicked and result is fetched.
        $("#search-input").val("");
    });

// Local storage function using class="list-group" id="history" as targets
    

});