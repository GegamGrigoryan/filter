 import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Toolbar({ filters, onSelectFilter, selected }) {
  return (
    <div className="toolbar-container">
      {filters.map((el) => {
        return (
          <div className="toolbar-item" key={uuidv4()}>
            {el === selected ? (
              <span key={uuidv4()} onClick={onSelectFilter} className="select">
                {el}
              </span>
            ) : (
              <span key={uuidv4()} onClick={onSelectFilter}>
                {el}
              </span>
             
            )}
          </div>
        );
      })}
    </div>
  );
}
