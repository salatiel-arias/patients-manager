import { useState } from "react";
import "./App.css";
import AddPatientModal from "./components/AddPatientModal.js";
import PatientsList from "./components/PatientsList.js";
import SearchBox from "./components/SearchBox.js";
import InfoPanel from "./components/InfoPanel.js";
import Navbar from "./components/Navbar.js";
import { entries } from "./Database.js";

function RenderHome({
  patientsArray,
  setPatientsArray,
  selectedPatientByIndex,
  setSelectedPatientByIndex,
  patientCardMenu,
  setPatientCardMenu,
}) {
  return (
    <div className="content-grid">
      <div id="add-btn-container">
        <AddPatientModal
          addNewPatient={(entry) => {
            var new_entry = entry;
            new_entry.index = patientsArray.length;
            setPatientsArray([...patientsArray, new_entry]);
          }}
        />
      </div>
      <div id="search-container">
        <SearchBox />
      </div>
      <div id="patientlist-container">
        <PatientsList
          entries={patientsArray}
          selection={selectedPatientByIndex}
          setSelection={setSelectedPatientByIndex}
          cardMenu={patientCardMenu}
          setCardMenu={setPatientCardMenu}
          deletePatient={(id) => {
            console.log(id)
            console.log(patientsArray.filter((item) => item.id !== id))
            setPatientsArray(patientsArray.filter((item) => item.id !== id));
          }}
        />
      </div>
      <div id="info-panel-container">
        <InfoPanel info={patientsArray[selectedPatientByIndex]} />
      </div>
    </div>
  );
}

function App() {
  const [navbarSelection, setNavbarSelection] = useState(2);
  const [selectedPatientByIndex, setSelectedPatientByIndex] = useState(0);
  const [patientsArray, setPatientsArray] = useState(entries);
  const [patientCardMenu, setPatientCardMenu] = useState({
    isActive: false,
    position: [0, 0],
  });

  return (
    <>
      <Navbar
        selection={navbarSelection}
        setSelection={(sel) => setNavbarSelection(sel)}
      />
      {navbarSelection === 2 ? (
        <RenderHome
          patientsArray={patientsArray}
          selectedPatientByIndex={selectedPatientByIndex}
          setSelectedPatientByIndex={(select) =>
            setSelectedPatientByIndex(select)
          }
          setPatientsArray={(new_entries) => setPatientsArray(new_entries)}
          patientCardMenu={patientCardMenu}
          setPatientCardMenu={(props) => setPatientCardMenu(props)}
        />
      ) : (
        <div className="placeholder" />
      )}
    </>
  );
}

export default App;
