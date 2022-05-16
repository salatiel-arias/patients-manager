import { useState } from "react";
import "./App.css";
import Table from "./components/Table.js";
import Modal from "./components/Modal.js";
import Navbar from "./components/Navbar";

function App() {
  const table_headers = ["id", "nombre", "edad", "sexo"];
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


  return (
    <>
      <div className="main-grid">
        <div id="add-btn-box"><Modal/></div>
        <div id="navbar-box"><Navbar/></div>
        <div id="lookup-box">lookup-box</div>
        <div id="table-box"><Table headers={table_headers} entries={entries} /></div>
        <div id="footer-box"><span id="footer">Powered by ProdigalBit</span></div>
      </div>
    </>
  );
}

export default App;
