export const threeHoursResponse = (city) => {
  const apiKey = "f8a6fd2ffd9f9c4b8a5d7d56edf35101";
  const ApiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  return fetch(ApiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Город не найден");
      }
      return response.json();
    })
    .then((data) => {
      const weatherInfo = data.list
        .map((item) => {
          return {
            dt_txt: item.dt_txt,
            main: {
              ...item.main,
              temp: Math.round(item.main.temp),
            },
            weather: item.weather,
            wind: item.wind,
          };
        })
        .slice(0, 6);

      return weatherInfo;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
