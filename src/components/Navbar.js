import "./Navbar.css";
import profile from "./resources/profile.svg"
import home from "./resources/home.svg";
import statistics from "./resources/statistics.svg";
import accounting from "./resources/accounting.svg";

export default function Navbar({selection, setSelection}) {

  return (
      <div className="navbar-container">
      <div
          className={
            selection === 1 ? "navbar-active" : "navbar-item"
          }
          onClick={()=>(setSelection(1))}
        >
          <img className="navbar-svg" src={profile} />
        </div>


        <div
          className={
            selection === 2 ? "navbar-active " : "navbar-item"
          }
          onClick={()=>(setSelection(2))}
        >
          <img className="navbar-svg" src={home} />
        </div>


        <div
          className={
            selection === 3 ? "navbar-active" : "navbar-item"
          }
          onClick={()=>(setSelection(3))}
        >
          <img className="navbar-svg" src={statistics} />
        </div>


        <div
          className={
            selection === 4 ? "navbar-active" : "navbar-item"
          }
          onClick={()=>(setSelection(4))}
        >
          <img className="navbar-svg" src={accounting} />
        </div>

      </div>
  );
}
