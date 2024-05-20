import React, { useState, useEffect } from "react";
import { threeHoursResponse } from "../../utils/threeHours"; // замените на путь к вашему файлу API

const WeatherThreeHours = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    threeHoursResponse(city)
      .then((data) => {
        const filteredData = data.filter((item) => {
          const hour = new Date(item.dt_txt).getUTCHours();
          return hour >= 0 && hour <= 24;
        });
        setWeatherData(filteredData);
      })
      .catch((error) => console.error(error));
  }, [city]);

  return (
    <div>
      {weatherData.map((item, index) => (
        <div key={index}>
          <p> {item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherThreeHours;
