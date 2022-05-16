import React, { useState, useEffect, useRef } from "react";
import "./Table.css";

function RenderRows({ entries, tableRef }) {
  const [highlightRowIndex, setHighlightRowIndex] = useState(entries.length);
  const [rowNavActive, setRowNavActive] = useState(false);

  var onRowClick = (item) => {
    setRowNavActive(true);
    setHighlightRowIndex(entries.indexOf(item));
  };

  var onRowDoubleClick = (name) => {
    alert("row of " + name + " pressed!");
  };

  // Basic navigation to handle active rows
  var navigationKeysHandler = (event) => {
    if (rowNavActive === true) {
      if (event.key === "ArrowUp" && highlightRowIndex > 0) {
        setHighlightRowIndex(highlightRowIndex - 1);
      }

      if (event.key === "ArrowDown" && highlightRowIndex < entries.length - 1) {
        setHighlightRowIndex(highlightRowIndex + 1);
      }

      if (event.key === "Enter") {
        onRowDoubleClick(entries[highlightRowIndex].name);
      }
    }
  };

  var handleClickOutside = (e) => {
    if (tableRef.current && !tableRef.current.contains(e.target)) {
      setHighlightRowIndex(entries.length);
      setRowNavActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", navigationKeysHandler);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", navigationKeysHandler);
      window.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <tbody>
      {entries.map((item) => (
        <tr
          className={
            highlightRowIndex === entries.indexOf(item)
              ? "active_row row"
              : "row"
          }
          key={item.id}
          onDoubleClick={() => {
            onRowDoubleClick(item.name);
          }}
          onClick={() => onRowClick(item)}
        >
          <td className="id-col"> {item.id}</td>
          <td className="name-col"> {item.name}</td>
          <td className="age-col"> {item.age}</td>
          <td className="gender-col">{item.gender}</td>
        </tr>
      ))}
    </tbody>
  );
}

/*-----------------------------------------------------
 table parent component
------------------------------------------------------*/
function MyTable({ headers, entries }) {
  const tableRef = useRef();

  return (
    <>
      <div className="table-container">
        <table ref={tableRef}>
          <thead>
            <tr>
              <th>{headers[0]}</th>
              <th>{headers[1]}</th>
              <th>{headers[2]}</th>
              <th>{headers[3]}</th>
            </tr>
          </thead>
          <RenderRows entries={entries} tableRef={tableRef} />
        </table>
      </div>
    </>
  );
}

export default MyTable;
