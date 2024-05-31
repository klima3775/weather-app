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
    // <div className="search">
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="text"
    //       value={city}
    //       onChange={handleChange}
    //       placeholder="Искать здесь..."
    //     />
    //     <WeatherButton buttonText="Показать погоду" />
    //   </form>
    // </div>

    <div class="search-container">
      <form class="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Искать здесь..."
          class="search-input"
        />
        <button type="submit" class="search-button">
          <svg
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1115.1 4.1a7.5 7.5 0 011.6 12.55L21 21z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
