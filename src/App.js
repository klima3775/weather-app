import React, { useState } from "react";
import PopularCity from "./components/PopularCity/popularCity";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import { fetchWeatherData } from "./utils/response";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCitySelect = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setError(null);
      setIsModalOpen(false);
    } catch (error) {
      setError(error.message);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <PopularCity onCityClick={handleCitySelect} />
      <SearchForm onSearch={handleCitySelect} />
      <WeatherItem weatherData={weatherData} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
