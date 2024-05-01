import "./searchForm.scss";
import WeatherButton from "../GetWeather/getWeather";
import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Искать здесь..."
        />
        <WeatherButton buttonText="Показать погоду" />
      </form>
    </div>
  );
};
export default SearchForm;
