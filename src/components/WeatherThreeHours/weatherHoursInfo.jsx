import React, { useState, useEffect } from "react";
import { threeHoursResponse } from "../../utils/threeHours";
import "./weatherThree.scss";

const WeatherThreeHours = ({ city }) => {
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
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weatherIcon}.png`}
              alt={weatherData.description}
            />
            <p>{new Date(item.dt_txt).getHours()}:00</p>
          </div>
          <p>{item.main.temp}°</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherThreeHours;
