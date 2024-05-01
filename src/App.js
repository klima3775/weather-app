import PopularCity from "./components/PopularCity/popularCity";
// import RenderWeather from "./components/RenderWeather/RenderWeather";
import { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import { fetchWeatherData } from "./utils/response";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };
  return (
    <div className="App">
      <PopularCity />
      <SearchForm onSearch={handleSearch} />
      <WeatherItem weatherData={weatherData} />
    </div>
  );
}

export default App;
