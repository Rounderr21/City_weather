//The global elements//
let cityNameInput = document.getElementById('cityNameInput');
let search = document.getElementById('inputContainer');
let submitEl = document.getElementById('submit');//button on the html
let fiveDayForcast = document.getElementById('rangeWeather');

//*need to get the adi city.name and then get the list array for 5 days only*//

submitEl.addEventListener('click', function(){
    let userInput = cityNameInput.value
    console.log(userInput);//user input that was in the input tag above search
 


    let requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput + ',US&limit=5&appid=2069a5601143bb130db28083a5a1536c'; //use this as the API for the weather
    fetch(requestUrl)
    .then(function (response){
        return response.json();

    })
    .then(function (data) {

        let lat = data[0].lat;
        let lon = data[0].lon;

        let Url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=2069a5601143bb130db28083a5a1536c' //will use this to get the city weather
        fetch(Url)
        .then(function (response){
            return response.json();
    
        })
        .then(function (data) {
        console.log(data.list);//this is the list of arrays for the city that was provided by the lat and lon.

        //will need to make a for loop for 5 of the arrays i need.
        let temperatureFahrenheit = (data.list[0].main.temp - 273.15) * 9/5 + 32;
            fiveDayForcast.append('Temp: ' + temperatureFahrenheit.toFixed(2) + '°F');
            fiveDayForcast.append('wind: ' + data.list[0].wind.speed + 'MPH');
            fiveDayForcast.append('Humidity: ' + data.list[0].main.humidity + '%');

        });
    });
});