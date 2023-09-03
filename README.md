# City_weather

# Project Description
This Project is designed to get a 5-day forcast of a city that the user types in. It will display temp, wind, humidity, and current weather icons. Challenges that I faced are trying to create elements into javascript and making enough functions to not make it so complicated.

When you open the project you are presented with a blank page that has a search bar to put a city into it. Once the user puts in a city it will find the corresponding city lat & lng. Once that has been found it will use the **open weather API** to get the weather information. Once it has this weather information it will display it dynamically using javascript to the html page. At this point the user can read the 5-day forcast of the current city or type in another city name to search. If the user types in another city name, the current city information will disappear and the city they typed inwill be displayed.

# HTML File
Started with no starter code. Placed minimal elements in the HTML file with semantic HTML tags to ensure a well-structed document. Inserted comments to breakdown the document further to make it easier to read.

# CSS File
Started with no starter code. Created diverse color scheme to enhance the visuals of the website. Inserted comments to breakdown the document further to make it easier to read, and to inform them of where the elements are being used.

# Javascript File
Started with no starter code. placed DOMCONTENTLOAD function at the head to ensure that the HTML file is ready before the javascript starts. By doing this we ensure a smooth operation from function to function to make the process of following the code easier. Used dayJS to create time to use on document. Created click function for the search button for user to input a value. Used value with **open weather API** to get weather information based on the lat and lng. Once data was received  created dynamic html elements and inserted **API** data into those elements. Created loop to received multiple days of weather information. After receiving all data required appened it to the correct html element to display it on the website. Created previous search function so that city names are not duplicated and that the user may click on these buttons to retrive the cities weather information again. Also inserted comments to breakdown the document further to make it easier to read.

# Github
Pushed out commits of the HTML, CSS, Javascript, and README when finishing any coding edits, as to ensure I could go back at anytime to earlier designs if need be.

Project is located at this URL: https://rounderr21.github.io/City_weather/

Screenshot of the Project:

![Alt text](//Assets/Images/First_look_at_startup.png "Inital page of Project")

![Alt text](/Assets/Images/One_city_typed_in.png "Once city was typed in and is showing the forecast")

![Alt text](/Assets/Images/multiply_cities.png "multiple cities on the list of previous searches")

![Alt text](/Assets/Images/clicked_on_previous_search_button.png "clicked a previous search button and it displayed that cities properties")
