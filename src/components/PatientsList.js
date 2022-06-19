import { useEffect } from "react";
import PatientCard from "./PatientCard.js";
import "./PatientsList.css";

function PatientsList({
  entries,
  selection,
  setSelection,
  setCardMenu,
  cardMenu,
  deletePatient
}) {
  var onRowDoubleClick = (name) => {
    alert("row of " + name + " pressed!");
  };

  function handleClickOutsideCarMenu(e) {
    if (
      cardMenu.isActive &&
      e.target.id !== "card-menu-option" &&
      e.target.id !== "card-menu-icon"
    ) {
      setCardMenu({ isActive: false, position: [0, 0] });
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutsideCarMenu);
    return () => {
      window.removeEventListener("click", handleClickOutsideCarMenu);
    };
  });

  return (
    <div className="patients-list">
      {entries.map((item) => (
        <div
          key={entries.indexOf(item)}
          onDoubleClick={() => {
            onRowDoubleClick(item.name);
          }}
          onClick={() => setSelection(entries.indexOf(item))}
        >
          <PatientCard
            isActive={selection === entries.indexOf(item)}
            name={item.name}
            description={item.description}
            cardMenu={cardMenu}
            setCardMenu={setCardMenu}
            deletePatient={()=>deletePatient(entries.indexOf(item))}
          />
        </div>
      ))}
    </div>
  );
}

export default PatientsList;
