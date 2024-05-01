import "./popularCity.scss";

const PopularCity = ({ onCityClick }) => {
  const buttonsCity = [
    { name: "Дніпро", label: "Днепр" },
    { name: "Харків", label: "Харків" },
    { name: "Львів", label: "Львів" },
    { name: "Київ", label: "Київ" },
  ];

  const buttons = buttonsCity.map(({ name, label }) => {
    return (
      <button
        key={name}
        className="btnCity__item"
        onClick={() => onCityClick(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div>
      <div className="btnCity">{buttons}</div>
    </div>
  );
};

export default PopularCity;
