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
  const [isDarkTheme, setIsDarkTheme] = useState("light");

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
    <div className={`App ${isDarkTheme ? "light" : "dark"}`}>
      <ToggleSwitch
        toggleTheme={toggleTheme}
        textMode={isDarkTheme ? "light" : "dark"}
        isDarkTheme={isDarkTheme}
      />
      <SearchForm onSearch={handleCitySelect} isDarkTheme={isDarkTheme} />
      <PopularCity onCityClick={handleCitySelect} isDarkTheme={isDarkTheme} />
      <WeatherItem weatherData={weatherData} isDarkTheme={isDarkTheme} />
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          error={error}
          isDarkTheme={isDarkTheme}
        />
      )}
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
