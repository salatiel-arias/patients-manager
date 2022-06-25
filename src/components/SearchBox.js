import { useEffect, useState, useRef } from "react";
import { entries } from "../Database.js";
import "./SearchBox.css";

export default function SearchBox({list, updateDisplayedList}) {
  const defaultText = "buscar paciente...";
  const lookupRef = useRef();
  const [textValue, setTextValue] = useState({
    text: defaultText,
    new_input: false,
  });

  function handleTextInput(e) {
      setTextValue({ text: e.target.value, new_input: true });
      var capitalized = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
  
      console.log(capitalized);
      console.log(entries.filter((item)=> item.name.includes(capitalized)));
      updateDisplayedList(entries.filter((item)=> item.name.includes(capitalized)))
  

  }

  function handleClick(e) {
    if (e.target.value === defaultText) {
      setTextValue({ text: "", new_input: true });
    }

  }

  function handleClickOutside(e) {
    if (lookupRef.current && !lookupRef.current.contains(e.target) & (textValue.text === "")) {
      setTextValue({ text:defaultText, new_input: false })
      console.log(lookupRef.current)
    }

  }

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <>
      <input
        ref={lookupRef}
        className={
          "input-text " + (textValue.new_input ? "active-input-text" : "")
        }
        type="text"
        value={textValue.text}
        onChange={handleTextInput}
        onClick={handleClick}
      />
    </>
  );
}
