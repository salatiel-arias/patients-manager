import React, { useState } from "react";
import "./AddPatientModal.css";

function ModalWindow({closeWindowCallback}) {
  return (
    <>
      <div id="modal-background"></div>
      <div id="modal-container">
        <div id="modal-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <button
          className="std-button"
          id="close-color"
          onClick={() => closeWindowCallback()}
        >
          cancelar
        </button>
      </div>
    </>
  );
}

export default function AddPatientModal({ modalType }) {
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
      <button
        className="std-button"
        id="add-button"
        onClick={() => setModalIsActive(true)}
      >
        nuevo paciente
      </button>
      {modalIsActive ? <ModalWindow closeWindowCallback={() => setModalIsActive(false)} /> : null}
    </>
  );
}
