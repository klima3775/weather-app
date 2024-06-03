import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./toggle.scss";

const ToggleSwitch = () => {
  return (
    <Form>
      <div className="switch">
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          className="my-switch"
        />
      </div>
    </Form>
  );
};

export default ToggleSwitch;
