import React from "react";
import "./Modal.scss";

function Modal({ closeModal, error }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          <div className="error-icon">?</div>
          <div className="error-message">Ой, Сталася помилка</div>
          <div className="error-description">
            <p>{error}</p>
          </div>
          <button className="modal-button" onClick={closeModal}>
            Спробувати ще раз
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
