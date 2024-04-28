import "./searchForm.scss";
import WeatherButton from "../GetWeather/getWeather";
const SearchForm = () => {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Искать здесь..." />
        <WeatherButton />
      </form>
    </div>
  );
};
export default SearchForm;
