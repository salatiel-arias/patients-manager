import "./Navbar.css";
import PatientsSvg from "./resources/patients-icon.svg";
import StatisticsSvg from "./resources/statistics-icon.svg";
import AccountingSvg from "./resources/accounting-icon.svg";
import { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-user">
          Dra.
          <br />
          Jocelyn
          <br />
          Arias
          <br />
          Alarcon
          <br />
          <span id="nabla">&#8711;</span>
        </div>
        <div
          className={
            activeItem === 1 ? "navbar-item navbar-active" : "navbar-item"
          }
          onClick={()=>(setActiveItem(1))}
        >
          <img className="navbar-svg" src={PatientsSvg} />
        </div>
        <div
          className={
            activeItem === 2 ? "navbar-item navbar-active" : "navbar-item"
          }
          onClick={()=>(setActiveItem(2))}
        >
          <img className="navbar-svg" src={StatisticsSvg} />
        </div>
        <div
          className={
            activeItem === 3 ? "navbar-item navbar-active" : "navbar-item"
          }
          onClick={()=>(setActiveItem(3))}
        >
          <img className="navbar-svg" src={AccountingSvg} />
        </div>
      </div>
    </>
  );
}
