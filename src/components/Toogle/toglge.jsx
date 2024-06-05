import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./toggle.scss";

const ToggleSwitch = ({ toggleTheme }) => {
  return (
    <Form>
      <div className="switch">
        <p>dark</p>
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
