import "./InfoPanel.css";

function InfoBox({boxid, title, entries}) {
  return (
    <div id={boxid} className="info-box">
      <div className="infobox-label">{title}</div>
      <div className="infobox-entry">{entries[0]}</div>
    </div>
  );
}

export default function InfoPanel({info}) { 

  const general_info = {title:"Lupe Lopez", entries:["telefono", "direccion"]};

  return (
    <>
      <div className="info-panel">
        <InfoBox boxid="box1" title="Última Consulta" entries={["descripcion"]} />
        <InfoBox boxid="box2" title={info.name} entries={[info.age]}/>
        <InfoBox boxid="box3" title="Estudios Clínicos" entries={general_info.entries}/>
        <InfoBox boxid="box4" title="Historial Médico" entries={general_info.entries}/>
      </div>
    </>
  );
}
