import React, { useState } from "react";
import "./AddPatientModal.css";

function ModalWindow({ closeWindowCallback, addNewPatient }) {
  var entry = { name: "", age: 0, gender: "" };
  return (
    <>
      <div id="modal-background"></div>
      <div id="modal-container">
        <div id="modal-body">
          <div id="basic-info-container">
            <label>Nombre:</label>
            <input
              className="modal-input-field"
              type="text"
              onChange={(e) => {
                entry.name = e.target.value;
              }}
            />
            <label>Edad:</label>
            <input
              className="modal-input-field"
              type="number"
              onChange={(e) => {
                entry.age = e.target.value;
              }}
            />
            <label>Sexo:</label>
            <input
              className="modal-input-field"
              type="text"
              onChange={(e) => {
                entry.gender = e.target.value;
              }}
            />
          </div>
        </div>
        <div id="modal-footer">
          <button
            className="std-button"
            id="save-button"
            onClick={() => {
              addNewPatient(entry);
              closeWindowCallback();
            }}
          >
            Guardar
          </button>
          <button
            className="std-button"
            id="close-button"
            onClick={() => closeWindowCallback()}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
}

export default function AddPatientModal({ addNewPatient }) {
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
      {modalIsActive ? (
        <ModalWindow
          closeWindowCallback={() => setModalIsActive(false)}
          addNewPatient={addNewPatient}
        />
      ) : null}
    </>
  );
}
