import "./popularCity.scss";

const PopularCity = () => {
  const buttonsCity = [
    { name: "Дніпро", label: "Днепр" },
    { name: "Харків", label: "Харків" },
    { name: "Львів", label: "Львів" },
    { name: "Київ", label: "Київ" },
  ];

  const buttons = buttonsCity.map(({ name, label }) => {
    return (
      <button key={name} className="btnCity__item">
        {label}
      </button>
    );
  });

  return <div className="btnCity">{buttons}</div>;
};
export default PopularCity;
