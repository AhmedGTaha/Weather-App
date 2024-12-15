const form = document.querySelector(".form");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const key = "f25235f4847e25590352749defc2b613";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    try {
      const weatherData = await getData(city);
      displayData(weatherData);
    } catch (error) {
      console.log(error);
      displayError("An error occurred while fetching data");
    }
  } else {
    displayError("Please enter a city");
    return;
  }
});

async function getData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

function displayData(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  cityDisplay.textContent = city;
  cityDisplay.className = "cityDisplay";
  card.appendChild(cityDisplay);

  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `Temperature: ${(temp - 273.15).toFixed(1)}°C`;
  tempDisplay.className = "tempDisplay";
  card.appendChild(tempDisplay);

  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.className = "humidityDisplay";
  card.appendChild(humidityDisplay);

  const descDisplay = document.createElement("p");
  descDisplay.textContent = `Description: ${description}`;
  descDisplay.className = "descDisplay";
  card.appendChild(descDisplay);

  const weatherEmoji = document.createElement("p");
  weatherEmoji.textContent = getEmoji(id);
  weatherEmoji.className = "weatherEmoji";
  card.appendChild(weatherEmoji);
}

function getEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "🌩️";
    case weatherId >= 300 && weatherId < 400:
      return "🌦️";
    case weatherId >= 500 && weatherId < 600:
      return "🌧️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌫️";
    case weatherId === 800:
      return "☀️";
    case weatherId >= 801 && weatherId < 810:
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(message) {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = message;
  errorMessage.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorMessage);
}
