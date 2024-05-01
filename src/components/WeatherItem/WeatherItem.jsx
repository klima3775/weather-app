const WeatherItem = ({ weatherData }) => {
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
