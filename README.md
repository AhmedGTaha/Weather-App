### Weather App

#### Features:
- Fetch current weather information for a city.
- Displays:
  - City name.
  - Temperature in Celsius.
  - Humidity level.
  - Weather description.
  - Emoji representing the weather conditions.
- User-friendly interface with responsive design for mobile devices.

---

#### Built With:
- **HTML**: For the structure.
- **CSS**: For styling and responsive design.
- **JavaScript**: For handling API requests and DOM manipulation.
- **OpenWeatherMap API**: For weather data.

---

#### How to Use:
1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Enter the name of a city in the input field and click "Search."
4. The weather details for the city will appear.

---

#### Code Highlights:
- **Dynamic Data Display**: Weather information is displayed dynamically by creating and appending DOM elements.
- **Error Handling**: Errors like invalid city names or API issues are gracefully displayed to the user.
- **Weather Emojis**: Weather conditions are represented by intuitive emojis.

---

#### Example:
For the city **London**, the app might display:
- **Temperature**: 10.5°C
- **Humidity**: 80%
- **Description**: Clear sky
- **Emoji**: ☀️

---

#### Setup:
1. Get your API key from [OpenWeatherMap](https://openweathermap.org/).
2. Replace the `key` variable in the JavaScript code with your API key.

```javascript
const key = "f25235f4847e25590352749defc2b613";
```

---

#### Future Improvements:
- Add support for displaying a 5-day forecast.
- Include unit toggle (Celsius/Fahrenheit).
- Improve error handling with more detailed messages.

Feel free to contribute!
