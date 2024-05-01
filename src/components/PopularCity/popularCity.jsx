import "./popularCity.scss";
import React, { useState } from "react";
import { fetchWeatherData } from "../../utils/response";

const PopularCity = () => {
  const [weatherData, setWeatherData] = useState(null);
  const buttonsCity = [
    { name: "Дніпро", label: "Днепр" },
    { name: "Харків", label: "Харків" },
    { name: "Львів", label: "Львів" },
    { name: "Київ", label: "Київ" },
  ];

  const handleCLick = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(null);
  };

  const buttons = buttonsCity.map(({ name, label }) => {
    return (
      <button
        key={name}
        className="btnCity__item"
        onClick={() => handleCLick(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div>
      <div className="btnCity">{buttons}</div>
    </div>
  );
};
export default PopularCity;
