# Ski Resort Weather Forecasting

Try it out here: [Ski Resort Weather Forecasting](https://ethansny.github.io/579-final-project/)

## Project Overview

I developed a React application that aggregates weather data for a wide array of ski resorts and places a pin on an interactive map indicating the resort's location. Users also have the option to select any point on the map to get weather information for that area. Additionally, there is some customization available regarding the specific weather data received upon request.

### Key Features

- **Interactive Map**: Utilizing Leaflet, a pin on the map represents the resort selected from the autocomplete suggestion list. Users can also pick any location on the map to fetch weather data for that area. The relevant component is: `SearchField.jsx`

- **Typeahead Resort Selection**: Offers an extensive list of resorts with typeahead functionality. As users type the name of a desired resort, the input field autocompletes, facilitating the process of retrieving the respective weather data. The state is then updated, which triggers the map pin to be placed at the chosen resort. These features are in this component: `SearchField.jsx`

- **Weather Data Retrieval**: Delivers unique weather data obtained for each resort or manually chosen location from the Open-Meteo API. Users can select additional filters to alter the API request, which modifies the scope of information retrieved according to user preferences. The outcome of these requests is rendered by this component: `WeatherData.jsx`

## Achievements

In executing this project, I successfully created a site for users to access current weather data for numerous ski resorts while visually displaying their locations on a global map. Users can also customize the breadth of weather data they receive and can acquire this information for any location worldwide.

I have also crafted a dynamic approach to parsing the JSON responses from Open-Meteo, to improve the project's scalability. The flexibility of the application allows for modifications to the API call based on user-selected filters. Consequently, expanding the range of filters in the future to enhance the user experience would not necessitate a complete overhaul of the codebase. These functionalities can be seen in `Filters.jsx` and on line 30 of `WeatherData.jsx`.

## Limitations

A significant challenge encountered was reverse geocoding latitude and longitude coordinates into a physical address/city. Providing users with a general address for a location selected on the map was the goal, but feasible solutions often required paid API services.

Data accuracy was another issue; the initial dataset containing resort names paired with geolocations had inconsistencies that became apparent after implementation. These inaccuracies yield incorrect weather data for certain resorts. There was insufficient time to source and implement cleaner data, presenting a clear path for future improvement.

## Areas of Difficulty

This project was my first time building a React Application from scratch, and it was daunting. I struggled with conceptualizing component structures, necessitating several iterations and rebuilds of components as the project evolved.

Incorporating Leaflet presented further difficulties. Though rendering the map was straightforward, tailoring it to support the desired level of interactivity proved challenging. Notably, the map's infinite scrolling led to strange behaviors in longitude values and pin placements. I resolved these issues by restricting map scrolling and gain experience in debugging and troubleshooting code that others have written.

## Future Work and Scalability

Future enhancements could include options to adjust the weather forecast's time scale, incorporating historical data, allowing users to tailor the app further to their needs or interests. Integration with up-to-date weather forecasts could facilitate well-informed decisions when selecting from numerous resorts globally.

Additionally, my final project for SI507 was a program that uses similar data to recommend the best ski resort based on user-defined preferences. This functionality could merge with this web app, elevating the user experience for both tools. The backend could enrich the web app's features, with real-time weather data refining the recommendations provided to users, while the web app would improve the user experince of the python program, which is currenly a command line tool.
