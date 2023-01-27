// Query URL variable
var urlQuery = "https://api.openweathermap.org/data/2.5/weather?";
// Api key variable
var apiKey = "&appid=50e333b7d0f2f6f179249a41b9ce7e72";
// empty variable to assign within the search function.
var queryUrlAndKey;



// funtion to search on click after input #search-input.
$("#search-button").on("click", function (event) {
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

    
    // log url query
    // Console logs the result of celsius with only two didgets after the decimal.
    console.log(celsius.toFixed(2) + " C");

        // log response

// Content to transfer to HTML

    // create div to display the results of the search query/variables below 
    // to prepend to ID #today section
        var todaysWeather = $('<div class="current-weather">');

    // variables for different results to store:

    // City (h2)
    var searchedCity = response.name;
    var cityName = $('<h2>').text(searchedCity + degreesSymbol);
    todaysWeather.append(cityName);

    // Date (h2)
    // var date = response.;
    var todaysDate;

    // Weather Icon
    // var weatherIcon = response.

    // Temperature (p)
    // var temp = response.main.temp;

    // Wind (p)
    // var windSpeed = response.;

    // Humidity (p)
    // var humidity = response.;

// Prepend to #today 
        $("#today").prepend(todaysWeather);
    });

});