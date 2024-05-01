import PopularCity from "./components/PopularCity/popularCity";
// import RenderWeather from "./components/RenderWeather/RenderWeather";
import { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import { fetchWeatherData } from "./utils/response";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleCitySelect = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };
  return (
    <div className="App">
      <PopularCity onCityClick={handleCitySelect} />
      <SearchForm onSearch={handleCitySelect} />
      <WeatherItem weatherData={weatherData} />
    </div>
  );
}

export default App;
