import "./popularCity.scss";
import { fetchWeatherData } from "../../utils/response";
import { useState } from "react";
const PopularCity = () => {
  const [weatherData, setWeatherData] = useState(null);
  const buttonsCity = [
    { name: "Дніпро", label: "Днепр" },
    { name: "Харків", label: "Харків" },
    { name: "Львів", label: "Львів" },
    { name: "Київ", label: "Київ" },
  ];

  const handleButtonClick = async (city) => {
    const data = await fetchWeatherData(city);
    setWeatherData(data);
  };

  const buttons = buttonsCity.map(({ name, label }) => {
    return (
      <button
        key={name}
        className="btnCity__item"
        onClick={() => handleButtonClick(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btnCity">{buttons}</div>;
};
export default PopularCity;
