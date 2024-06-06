import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./toggle.scss";

const ToggleSwitch = ({ toggleTheme, textMode, isDarkTheme }) => {
  return (
    <Form>
      <div className={`switch ${isDarkTheme ? "light" : "dark"}`}>
        <p>{textMode} mode</p>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="my-switch"
          onChange={toggleTheme}
        />
      </div>
    </Form>
  );
};

export default ToggleSwitch;
