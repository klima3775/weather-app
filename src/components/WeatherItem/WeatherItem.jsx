const WeatherItem = ({ weatherData }) => {
  //   <div>
  //     {weatherData && (
  //       <div>
  //         {/* <h2>{weatherData.name}</h2>
  //         <p>{weatherData.weather[0].description}</p>
  //         <p>Температура: {weatherData.main.temp} &deg;C</p>
  //         <p>Ощущается как: {weatherData.main.feels_like} &deg;C</p>
  //         <p>Влажность: {weatherData.main.humidity}%</p> */}
  //         {weatherData && (
  //           <div>
  //             <h2>Погода в городе {weatherData.name}</h2>
  //             <p>Температура: {weatherData.main.temp}°C</p>
  //             {/* Другие данные о погоде */}
  //           </div>
  //         )}
  //       </div>
  //     )}
  //   </div>;
  if (!weatherData) {
    return <div>Погода не найдена</div>;
  }
  return (
    <div className="weather">
      <h2>Погода в {weatherData.city}</h2>
      <p>Температура: {weatherData.temperature}°C</p>
      <p>Описание: {weatherData.description}</p>
    </div>
  );
};
export default WeatherItem;
