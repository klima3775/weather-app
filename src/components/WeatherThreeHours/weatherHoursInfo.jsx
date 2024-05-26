import React, { useState, useEffect } from "react";
import { threeHoursResponse } from "../../utils/threeHours";
import "./weatherThree.scss";

const WeatherThreeHours = ({ city }) => {
  // Removed weatherData prop
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    threeHoursResponse(city)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error(error));
  }, [city]);

  return (
    <div className="weather-container">
      {weatherData.map((item, index) => (
        <div className="weather-three" key={index}>
          <div className="time">
            <p>{new Date(item.dt_txt).getHours()}:00</p>
            <img
              src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} // Changed weatherData.weatherIcon to item.weather[0].icon
              alt={item.weather[0].description} // Changed weatherData.description to item.weather[0].description
            />
          </div>
          <p>{item.main.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherThreeHours;
