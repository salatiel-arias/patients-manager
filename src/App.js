import { useState } from "react";
import "./App.css";
import AddPatientModal from "./components/AddPatientModal.js";
import PatientsList from "./components/PatientsList.js";
import SearchBox from "./components/SearchBox.js";
import InfoPanel from "./components/InfoPanel.js";
import Navbar from "./components/Navbar.js";

  const entries = [
    { id: 0, name: "Lupe Lopez", age: 33, gender: "female" },
    { id: 1, name: "Sara Garcia", age: 45, gender: "female" },
    { id: 2, name: "Irma Perez", age: 50, gender: "female" },
    { id: 3, name: "Rogelia Sanchez", age: 41, gender: "female" },
    { id: 5, name: "Martina Gonzalez", age: 25, gender: "female" },
    { id: 6, name: "Lupe Lopez", age: 33, gender: "female" },
    { id: 7, name: "Sara Garcia", age: 45, gender: "female" },
    { id: 8, name: "Irma Perez", age: 50, gender: "female" },
    { id: 9, name: "Rogelia Sanchez", age: 41, gender: "female" },
    { id: 10, name: "Martina Gonzalez", age: 25, gender: "female" },
    { id: 11, name: "Irma Perez", age: 50, gender: "female" },
    { id: 12, name: "Sara Garcia", age: 45, gender: "female" },
    { id: 13, name: "Irma Perez", age: 50, gender: "female" },
    { id: 14, name: "Rogelia Sanchez", age: 41, gender: "female" },
    { id: 15, name: "Martina Gonzalez", age: 25, gender: "female" },
    { id: 16, name: "Irma Perez", age: 50, gender: "female" },
  ];

function RenderHome({
  patientSelection,
  setPatientSelection,
  selectionIndex,
  setSelectionIndex,
}) {
  function confirmIndex(index) {
    setSelectionIndex(index);
  }
  return (
    <div className="content-grid">
      <div id="add-btn-container">
        <AddPatientModal />
      </div>
      <div id="search-container">
        <SearchBox />
      </div>
      <div id="patientlist-container">
        <PatientsList
          entries={entries}
          selection={patientSelection}
          setSelection={(selection) => {
            setPatientSelection(selection.id);
            confirmIndex(selection.index);
          }}
        />
      </div>
      <div id="info-panel-container">
        <InfoPanel info={entries[selectionIndex]} />
      </div>
    </div>
  );
}

function App() {
  const [navbarSelection, setNavbarSelection] = useState(2);
  const [patientSelection, setPatientSelection] = useState(0);
  const [selectionIndex, setSelectionIndex] = useState(0);
  return (
    <>
      <Navbar
        selection={navbarSelection}
        setSelection={(sel) =>setNavbarSelection(sel)}
      />
      {navbarSelection === 2 ? (
        <RenderHome
          patientSelection={patientSelection}
          setPatientSelection={(select) => setPatientSelection(select)}
          selectionIndex={selectionIndex}
          setSelectionIndex={(select) => setSelectionIndex(select)}
        />
      ) : (
        <div className="placeholder" />
      )}
    </>
  );
}

export default App;
