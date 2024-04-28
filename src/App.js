import SearchForm from "./components/SearchForm/SearchForm";
import PopularCity from "./components/PopularCity/popularCity";
import WeatherButton from "./components/GetWeather/getWeather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PopularCity />
      <SearchForm />
      <WeatherButton />
    </div>
  );
}

export default App;
