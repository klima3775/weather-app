import React, { useContext } from "react";
import Timer from "../Timer/timer";
import WeatherThreeHours from "../WeatherThreeHours/weatherHoursInfo";
import { ThemeContext } from "../../App";
import "./weather.scss";

const WeatherItem = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <div className={`weather`}>
      <div className="time">
        <Timer />
      </div>
      <div className="top">
        <div className="left">
          <h2>{weatherData.city}</h2>
          <p>{weatherData.temperature}°C</p>
        </div>
        <div className="right">
          <p>{weatherData.description}</p>
          <img
            src={`https://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
            alt={weatherData.description}
          />
        </div>
      </div>
      <div className="weather-details">
        <p>Вологість: {weatherData.humidity}%</p>
        <p>Швидкість вітру: {weatherData.windSpeed} м/с</p>
      </div>
      <div className="weather-forecast">
        <WeatherThreeHours city={weatherData.city} weatherData={weatherData} />
      </div>
    </div>
  );
};

export default WeatherItem;
