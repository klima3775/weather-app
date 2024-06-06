import React, { useRef } from "react";
import "./popularCity.scss";

const PopularCity = ({ onCityClick, isDarkTheme }) => {
  const sliderRef = useRef(null);

  const buttonsCity = [
    { name: "Дніпро", label: "Дніпро" },
    { name: "Харків", label: "Харків" },
    { name: "Львів", label: "Львів" },
    { name: "Київ", label: "Київ" },
    { name: "Одеса", label: "Одеса" },
    { name: "Івано-Франківськ", label: "Івано-Франківськ" },
    { name: "Чернівці", label: "Чернівці" },
    { name: "Житомир", label: "Житомир" },
    { name: "Черкаси", label: "Черкаси" },
    { name: "Полтава", label: "Полтава" },
    { name: "Вінниця", label: "Вінниця" },
    { name: "Хмельницький", label: "Хмельницький" },
    { name: "Чернігів", label: "Чернігів" },
    { name: "Рівне", label: "Рівне" },
    { name: "Тернопіль", label: "Тернопіль" },
    { name: "Ужгород", label: "Ужгород" },
    { name: "Суми", label: "Суми" },
    { name: "Херсон", label: "Херсон" },
    { name: "Кропивницький", label: "Кропивницький" },
    { name: "Миколаїв", label: "Миколаїв" },
    { name: "Луцьк", label: "Луцьк" },
    { name: "Запоріжжя", label: "Запоріжжя" },
  ];

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -240, // Adjust based on button width and margin
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 240, // Adjust based on button width and margin
      behavior: "smooth",
    });
  };

  return (
    <div className={`popularCitySlider ${isDarkTheme ? "light" : "dark"}`}>
      <button className="slider-button" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="slider-container" ref={sliderRef}>
        <div className="slider">
          {buttonsCity.map(({ name, label }) => (
            <button
              key={name}
              className="btnCity__item"
              onClick={() => onCityClick(name)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <button className="slider-button" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default PopularCity;
