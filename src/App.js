import React, { useState } from "react";
import PopularCity from "./components/PopularCity/popularCity";
import SearchForm from "./components/SearchForm/SearchForm";
import WeatherItem from "./components/WeatherItem/WeatherItem";
import { fetchWeatherData } from "./utils/response";
import Modal from "./components/Modal/Modal";
import ToggleSwitch from "./components/Toogle/toglge";
import "./App.scss";

// export const ThemeContext = React.createContext();

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    // <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
    <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
      <ToggleSwitch toggleTheme={toggleTheme} />
      <SearchForm onSearch={handleCitySelect} />
      <PopularCity onCityClick={handleCitySelect} />
      <WeatherItem
        weatherData={weatherData}
        // setIsDarkTheme={toggleTheme}
        // isDarkTheme={isDarkTheme}
      />
      {isModalOpen && <Modal closeModal={closeModal} error={error} />}
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
