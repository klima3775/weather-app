import WeatherButton from "../GetWeather/getWeather";

const WeatherItem = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }
  return (
    <div className="weather">
      <h2>Погода в {weatherData.city}</h2>
      <p>Температура: {weatherData.temperature}°C</p>
      <p>Описание: {weatherData.description}</p>
      <WeatherButton buttonText="Погода на 4 дні" />
    </div>
  );
};
export default WeatherItem;
