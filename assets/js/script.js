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

    
    // log url query
    // Console logs the result of celsius with only two didgets after the decimal.
    console.log(celsius.toFixed(2) + " C");

        // log response

    // variables for different results to store:
    // City
    // var cityName = response.;

    // Date
    // var date = response.

    // Weather Icon
    // var weatherIcon = response.

    // Temperature
    // var temp = response.;?

    // Wind
    // var windSpeed = response.;

    // Humidity
    // var humidity = response.;

    // content to transfer to HTML

    })

});