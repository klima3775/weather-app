import React, { useState } from "react";
import PopularCity from "./components/PopularCity/popularCity";
import SearchForm from "./components/SearchForm/searchForm";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import { fetchWeatherData } from "./utils/response";
import Modal from "./components/Modal/Modal"; // Импортируйте ваш новый компонент модального окна
import "./App.scss";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCitySelect = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
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
      <SearchForm onSearch={handleCitySelect} />
      <PopularCity onCityClick={handleCitySelect} />
      <WeatherItem weatherData={weatherData} />
      {isModalOpen && <Modal closeModal={closeModal} error={error} />}
    </div>
  );
}

export default App;
