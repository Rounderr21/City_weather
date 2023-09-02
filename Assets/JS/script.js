//The global elements//
let cityNameInput = document.getElementById("cityNameInput");
let search = document.getElementById("inputContainer");
let submitEl = document.getElementById("submit"); //button on the html
let fiveDayForcast = document.getElementById("rangeWeather");
let dayByDay = document.getElementById("dayByDay");
let FiveDay = document.getElementById("5Day");
let previousSearch = document.getElementById("previousSearch");
let searchButtons = document.getElementById("previousSearchButtons");

let time = dayjs().format(" (MM/DD/YYYY)");
//*need to get the adi city.name and then get the list array for 5 days only*//

clickButton();

function clickButton() {
  submitEl.addEventListener("click", function () {
    let userInput = cityNameInput.value;
    console.log(userInput); //user input that was in the input tag above search
    getData(userInput);
  });
}
function getData(userInput) {
  let requestUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    userInput +
    "&limit=5&appid=2069a5601143bb130db28083a5a1536c"; //use this as the API for the weather
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let lat = data[0].lat;
      let lon = data[0].lon;
      console.log(data);

      let Url =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=2069a5601143bb130db28083a5a1536c"; //will use this to get the city weather
      fetch(Url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          //this is the API id numbers to represent the icon when called to the page//
          const iconMapping = {
            200: "https://openweathermap.org/img/wn/11d@2x.png",
            201: "https://openweathermap.org/img/wn/11d@2x.png",
            202: "https://openweathermap.org/img/wn/11d@2x.png",
            210: "https://openweathermap.org/img/wn/11d@2x.png",
            211: "https://openweathermap.org/img/wn/11d@2x.png",
            212: "https://openweathermap.org/img/wn/11d@2x.png",
            221: "https://openweathermap.org/img/wn/11d@2x.png",
            230: "https://openweathermap.org/img/wn/11d@2x.png",
            231: "https://openweathermap.org/img/wn/11d@2x.png",
            232: "https://openweathermap.org/img/wn/11d@2x.png",
            300: "https://openweathermap.org/img/wn/09d@2x.png",
            301: "https://openweathermap.org/img/wn/09d@2x.png",
            302: "https://openweathermap.org/img/wn/09d@2x.png",
            310: "https://openweathermap.org/img/wn/09d@2x.png",
            311: "https://openweathermap.org/img/wn/09d@2x.png",
            312: "https://openweathermap.org/img/wn/09d@2x.png",
            313: "https://openweathermap.org/img/wn/09d@2x.png",
            314: "https://openweathermap.org/img/wn/09d@2x.png",
            321: "https://openweathermap.org/img/wn/09d@2x.png",
            500: "https://openweathermap.org/img/wn/10d@2x.png",
            501: "https://openweathermap.org/img/wn/10d@2x.png",
            502: "https://openweathermap.org/img/wn/10d@2x.png",
            503: "https://openweathermap.org/img/wn/10d@2x.png",
            504: "https://openweathermap.org/img/wn/10d@2x.png",
            511: "https://openweathermap.org/img/wn/10d@2x.png",
            520: "https://openweathermap.org/img/wn/10d@2x.png",
            521: "https://openweathermap.org/img/wn/10d@2x.png",
            522: "https://openweathermap.org/img/wn/10d@2x.png",
            531: "https://openweathermap.org/img/wn/10d@2x.png",
            600: "https://openweathermap.org/img/wn/13d@2x.png",
            601: "https://openweathermap.org/img/wn/13d@2x.png",
            602: "https://openweathermap.org/img/wn/13d@2x.png",
            611: "https://openweathermap.org/img/wn/13d@2x.png",
            612: "https://openweathermap.org/img/wn/13d@2x.png",
            613: "https://openweathermap.org/img/wn/13d@2x.png",
            615: "https://openweathermap.org/img/wn/13d@2x.png",
            616: "https://openweathermap.org/img/wn/13d@2x.png",
            620: "https://openweathermap.org/img/wn/13d@2x.png",
            621: "https://openweathermap.org/img/wn/13d@2x.png",
            622: "https://openweathermap.org/img/wn/13d@2x.png",
            701: "https://openweathermap.org/img/wn/50d@2x.png",
            711: "https://openweathermap.org/img/wn/50d@2x.png",
            721: "https://openweathermap.org/img/wn/50d@2x.png",
            731: "https://openweathermap.org/img/wn/50d@2x.png",
            741: "https://openweathermap.org/img/wn/50d@2x.png",
            751: "https://openweathermap.org/img/wn/50d@2x.png",
            761: "https://openweathermap.org/img/wn/50d@2x.png",
            762: "https://openweathermap.org/img/wn/50d@2x.png",
            771: "https://openweathermap.org/img/wn/50d@2x.png",
            781: "https://openweathermap.org/img/wn/50d@2x.png",
            800: "https://openweathermap.org/img/wn/01d@2x.png",
            801: "https://openweathermap.org/img/wn/02d@2x.png",
            802: "https://openweathermap.org/img/wn/03d@2x.png",
            803: "https://openweathermap.org/img/wn/04d@2x.png",
            804: "https://openweathermap.org/img/wn/04d@2x.png",
          };

          //added empty elements to make sure that old values are taken off of screen when user puts in new city.
          fiveDayForcast.innerHTML = "";
          dayByDay.innerHTML = "";
          previousSearch.innerHTML = "";
          searchButtons.innerHTML = "";
          //this tells us what icon number it is and what it will show//
          let weatherID = data.list[0].weather[0].id;

          let temperatureFahrenheit =
            ((data.list[0].main.temp - 273.15) * 9) / 5 + 32;

          // Get the corresponding icon URL from the iconMapping object
          let iconUrl = iconMapping[weatherID];

          // Create an image element for the weather icon
          let weatherIcon = document.createElement("img");
          weatherIcon.src = iconUrl;
          weatherIcon.alt = "Weather Icon";

          // Created an unordered list and made it for the temp, wind, and humidity
          let currentDayList = document.createElement("ul");

          // Display the weather icon in the list
          currentDayList.innerHTML = `
    <h3>${data.city.name + time}</h3>
    <li>Temp: ${temperatureFahrenheit.toFixed(2)}°F</li>
    <li>Wind: ${data.list[0].wind.speed} MPH</li>
    <li>Humidity: ${data.list[0].main.humidity}%</li>
`;
          currentDayList.prepend(weatherIcon); // Add the weather icon as the first item in the list

          fiveDayForcast.appendChild(currentDayList);

          FiveDay.style.display = "block";

          //this is to make the remaning days appear on the bottom, need to change it to append it to the fivedaycontainer
          for (var i = 1; i < 6; i++) {
            // Create elements for the day's weather
            let dayContainer = document.createElement("div");
            dayContainer.className = "day-container";
            let dayDate = document.createElement("h3");
            dayDate.textContent = dayjs().add(i, "day").format("MM/DD/YYYY");
            let temperatureFahrenheit =
              ((data.list[i].main.temp - 273.15) * 9) / 5 + 32;
            let weatherID = data.list[i].weather[0].id;

            // Create an image element for the weather icon
            let weatherIcon = document.createElement("img");
            let iconUrl = iconMapping[weatherID];
            weatherIcon.src = iconUrl;
            weatherIcon.alt = "Weather Icon";

            // Create elements for temperature, wind, and humidity
            let temperatureElement = document.createElement("p");
            temperatureElement.textContent = `Temp: ${temperatureFahrenheit.toFixed(
              2
            )}°F`;
            let windElement = document.createElement("p");
            windElement.textContent = `Wind: ${data.list[i].wind.speed} MPH`;
            let humidityElement = document.createElement("p");
            humidityElement.textContent = `Humidity: ${data.list[i].main.humidity}%`;

            // Append elements to the day container
            dayContainer.appendChild(dayDate);
            dayContainer.appendChild(weatherIcon);
            dayContainer.appendChild(temperatureElement);
            dayContainer.appendChild(windElement);
            dayContainer.appendChild(humidityElement);

            // Append the day container to the dayByDay container
            dayByDay.appendChild(dayContainer);
          }

          previousSearches();
        });
    });
}

function previousSearches() {
  previousSearch.style.display = "block";
  searchButtons.style.display = "block";
  let previousSearchButtons = document.createElement("button");
  previousSearchButtons.setAttribute("id", "pastButtons");
  previousSearchButtons.textContent = cityNameInput.value;

  previousSearchButtons.addEventListener("click", function (event) {
    const textData = event.target.textContent;
    getData(textData);
  });

  search.append(previousSearchButtons);
}
