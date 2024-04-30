import "./searchForm.scss";
import WeatherButton from "../GetWeather/getWeather";
import React, { useState } from "react";

// const SearchForm = () => {
//   const [city, setCity] = useState(""); // Состояние для хранения введенного пользователем города
//   const [weatherData, setWeatherData] = useState(null); // Состояние для хранения данных о погоде

//   // Функция для отправки запроса на получение погоды по введенному городу
//   const getWeather = () => {
//     const apiKey = "f8a6fd2ffd9f9c4b8a5d7d56edf35101"; // API ключ
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Обновляем состояние с данными о погоде
//         setWeatherData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   };

//   // Обработчик события отправки формы
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)
//     getWeather(); // Вызываем функцию получения погоды
//   };

//   return (
//     <div className="search">
//       <form onSubmit={handleSubmit}>
//         {" "}
//         {/* Добавляем обработчик события onSubmit */}
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           placeholder="Искать здесь..."
//         />
//         <WeatherButton buttonText="Показать погоду" />
//       </form>
//       {/* Отображаем информацию о погоде */}
//       {weatherData && (
//         <div>
//           <h2>Погода в городе {weatherData.name}</h2>
//           <p>Температура: {weatherData.main.temp}°C</p>
//           {/* Другие данные о погоде */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchForm;

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
