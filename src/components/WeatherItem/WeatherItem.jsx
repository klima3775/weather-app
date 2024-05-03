import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import WeatherButton from "../GetWeather/getWeather";

const WeatherItem = ({ weatherData }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (weatherData) {
      const map = L.map(mapRef.current).setView([0, 0], 1);

      // Добавьте этот слой первым, чтобы он был под слоем OpenWeatherMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "Map data © OpenStreetMap contributors",
      }).addTo(map);

      L.tileLayer(
        "https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid={apiKey}",
        {
          layer: "temp_new",
          apiKey: "f8a6fd2ffd9f9c4b8a5d7d56edf35101", // замените на ваш API ключ
          attribution: "Map data © OpenWeatherMap",
          maxZoom: 40,
        }
      ).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [weatherData]);

  if (!weatherData) {
    return null;
  }

  return (
    <div className="weather">
      <h2>Погода в {weatherData.city}</h2>
      <p>Температура: {weatherData.temperature}°C</p>
      <p>Описание: {weatherData.description}</p>
      <div id="map" ref={mapRef} style={{ height: "300px", width: "100%" }} />
      <WeatherButton buttonText="Погода на 4 дні" />
    </div>
  );
};

export default WeatherItem;
