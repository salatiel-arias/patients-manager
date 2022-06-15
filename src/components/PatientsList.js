import React from "react";
import PatientCard from "./PatientCard.js";
import "./PatientsList.css";

function PatientsList({ entries, selection, setSelection}) {
  var onRowDoubleClick = (name) => {
    alert("row of " + name + " pressed!");
  };

  return (
    <div className="patients-list">
      {entries.map((item) => (
        <div
          key={item.id}
          onDoubleClick={() => {
            onRowDoubleClick(item.name);
          }}
          onClick={() => setSelection({id: item.id, index: entries.indexOf(item)})}
        >
          <PatientCard
            //active={highlightRowIndex === entries.indexOf(item)}
            isActive={selection === item.id}
            onClickCallback={() => setSelection({id: item.id, index: entries.indexOf(item)})}
            name={item.name}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default PatientsList;
