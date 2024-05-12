export const fetchWeatherData = async (city) => {
  try {
    const apiKey = "f8a6fd2ffd9f9c4b8a5d7d56edf35101";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ua&units=metric`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Город не найден");
    }

    const data = await response.json();
    const weatherInfo = {
      city: data.name,
      temperature: Math.round(data.main.temp),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      windDirection: data.wind.deg,
      weatherIcon: data.weather[0].icon,
      description: data.weather[0].description,
      // mapTileUrl: `https://tile.openweathermap.org/map/{temp_new}/{z}/{x}/{y}.png?appid=${apiKey}`,
    };

    return weatherInfo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
