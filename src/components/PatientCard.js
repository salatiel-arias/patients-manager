import "./PatientCard.css";

export default function PatientCard(props) {

  return (
    <>
      <div className={props.isActive ? "patient-card patient-card-active" : "patient-card"} onClick={()=>(props.onClickCallback())}>
        <div id="patient-image"><div id="img"></div>
            </div>
        <div id="patient-info">
          <span
          id="patient-name">{props.name}</span>
          <span id="patient-description">{props.description}</span>
        </div>
        <div id="card-settings" >...</div>
      </div>
    </>
  );
}
