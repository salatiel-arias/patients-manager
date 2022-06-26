import { useState } from "react";
import Table from "./Table.js";
import "./InfoPanel.css";

function InfoBox({ boxid, title, entries }) {
  return (
    <div id={boxid} className="info-box">
      <div className="infobox-label">{title}</div>
      <div className="infobox-entry">{entries[0]}</div>
    </div>
  );
}

function FilesBox({ boxid, title, files }) {
  const [dragOverState, setDragOverState] = useState(false);
  const [fileList, setFileList] = useState([...files]);

  function handleDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragOverState(true);
    } else {
      setDragOverState(false);
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragOverState(false);
    var file = e.dataTransfer.files;
    console.log(file[0].name);
    setFileList([...fileList, file[0].name]);
  }

  return (
    <div id={boxid} className="info-box">
      <div className="infobox-label">{title}</div>
      <input type="file" id="infobox-input-file" multiple={true} />
      <div
        type="file"
        className={dragOverState ? "infobox-dragover" : "infobox-files-display"}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        {dragOverState
          ? "Agrega un archivo"
          : <Table headers={["Nombre", "Ultima modificación"]} entries={fileList}/>}
      </div>
    </div>
  );
}

export default function InfoPanel({ info }) {
  const general_info = {
    title: "Lupe Lopez",
    entries: ["telefono", "direccion"],
  };

  return (
    <>
      {info === null ? null : (
        <div className="info-panel">
          <InfoBox
            boxid="box1"
            title="Última Consulta"
            entries={["descripcion"]}
          />
          <InfoBox boxid="box2" title={info.name} entries={[info.age]} />
          <FilesBox
            boxid="box3"
            title="Archivos Clínicos"
            files={["file1.txt"]}
          />
          <InfoBox
            boxid="box4"
            title="Historial Médico"
            entries={general_info.entries}
          />
        </div>
      )}
    </>
  );
}
