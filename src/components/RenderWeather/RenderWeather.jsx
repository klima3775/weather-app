import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import WeatherItem from "../WeatherItem/WeatherItem";

const RenderWeather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async () => {
    try {
      const apiKey = "f8a6fd2ffd9f9c4b8a5d7d56edf35101";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // Добавьте эту строку для получения данных из ответа
      const weatherInfo = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      };
      setWeatherData(weatherInfo);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <WeatherItem weatherData={weatherData} />
    </div>
  );
};
export default RenderWeather;
