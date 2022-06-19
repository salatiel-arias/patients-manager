import { useEffect, useState, useRef } from "react";
import "./SearchBox.css";

export default function Lookup() {
  const defaultText = "buscar paciente...";
  const lookupRef = useRef();
  const [textValue, setTextValue] = useState({
    text: defaultText,
    new_input: false,
  });

  function handleTextInput(e) {
    if (!textValue.new_input) 
      setTextValue({ text: "", new_input: true });
    else 
      setTextValue({ text: e.target.value, new_input: true });
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
      />
    </>
  );
}
