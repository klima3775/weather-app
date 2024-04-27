import "./SearchForm.scss";

const SearchForm = () => {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Искать здесь..." />
        <button type="submit"></button>
      </form>
    </div>
  );
};
export default SearchForm;
