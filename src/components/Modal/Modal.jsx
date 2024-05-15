import React from "react";
import "./Modal.scss";

function Modal({ closeModal, error }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default Modal;
