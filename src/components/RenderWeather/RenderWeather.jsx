import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import WeatherItem from "../WeatherItem/WeatherItem";
import { fetchWeatherData } from "../../utils/response";

const RenderWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "f8a6fd2ffd9f9c4b8a5d7d56edf35101";
  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city, apiKey);
      setWeatherData(data);
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
