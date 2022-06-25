import editSvg from "./resources/editPatient.svg"
import createPrescriptionSvg from "./resources/createPrescription.svg"
import deleteSvg from "./resources/deletePatient.svg"
import "./PatientCard.css";

function CardMenu({ isCardActive, cardMenu, deletePatient}) {

  const menuBox = <div style={{left: cardMenu.position[0], top:cardMenu.position[1]}} id="card-menu">
    <div id="card-menu-option"><img id="edit-svg" className="card-menu-svg" src={editSvg} />Editar paciente</div>
    <div id="card-menu-option"><img id="create-prescription-svg" className="card-menu-svg" src={createPrescriptionSvg} />Crear receta</div>
    <div id="card-menu-option" onClick={()=> deletePatient()}><img id="delete-svg" className="card-menu-svg" src={deleteSvg} />Eliminar paciente</div>
    </div>;

  return isCardActive && cardMenu.isActive ? menuBox : null;
}

export default function PatientCard(props) {

  function setCardMenuPosition(e) {      
    const position = e.target.getBoundingClientRect();
    props.setCardMenu({
      isActive: true,
      position: [position.left + (e.target.clientWidth * 0.5), position.top + (e.target.clientHeight)],
    });
  }

  return (
    <>
      <div
        className={
          props.isActive ? "patient-card patient-card-active" : "patient-card"
        }
      >
        <div id="patient-image">
          <div id="img"></div>
        </div>
        <div id="patient-info">
          <span id="patient-name">{props.name}</span>
          <span id="patient-description">{props.description}</span>
        </div>
        <div onClick={setCardMenuPosition} id="card-menu-icon">
          ...
        </div>
        <CardMenu
            isCardActive={props.isActive}
            cardMenu={props.cardMenu}
            deletePatient={props.deletePatient}
          />
      </div>
    </>
  );
}
